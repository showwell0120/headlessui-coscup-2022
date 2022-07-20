import { Slide, CodePane, FlexBox, Heading, Box } from 'spectacle';

const ReactTable2 = () => (
  <Slide>
    <FlexBox height="100%" flexDirection={'column'} justifyContent="start">
      <Heading fontSize={64}>useTable</Heading>
      <Box height={500} overflow="scroll">
        <CodePane
          language="jsx"
          highlightRanges={[
            [1, 12],
            379,
            [366, 375],
            [320, 364],
            [280, 316],
            [26, 29],
            [14, 19],
          ]}
        >
          {`
export const useTable = (props, ...plugins) => {
  // Apply default props
  props = applyDefaults(props);

  // Add core plugins
  plugins = [useColumnVisibility, ...plugins];

  // Create the table instance
  let instanceRef = React.useRef({});

  // Create a getter for the instance (helps avoid a lot of potential memory leaks)
  const getInstance = useGetLatest(instanceRef.current);

  // Assign the props, plugins and hooks to the instance
  Object.assign(getInstance(), {
    ...props,
    plugins,
    hooks: makeDefaultPluginHooks(),
  });

  // Allow plugins to register hooks as early as possible
  plugins.filter(Boolean).forEach((plugin) => {
    plugin(getInstance().hooks);
  });

  // Consume all hooks and make a getter for them
  const getHooks = useGetLatest(getInstance().hooks);
  getInstance().getHooks = getHooks;
  delete getInstance().hooks;

  // Allow useOptions hooks to modify the options coming into the table
  Object.assign(
    getInstance(),
    reduceHooks(getHooks().useOptions, applyDefaults(props))
  );

  const {
    data,
    columns: userColumns,
    initialState,
    defaultColumn,
    getSubRows,
    getRowId,
    stateReducer,
    useControlledState,
  } = getInstance();

  // Setup user reducer ref
  const getStateReducer = useGetLatest(stateReducer);

  // Build the reducer
  const reducer = React.useCallback(
    (state, action) => {
      // Detect invalid actions
      if (!action.type) {
        console.info({ action });
        throw new Error('Unknown Action 👆');
      }

      // Reduce the state from all plugin reducers
      return [
        ...getHooks().stateReducers,
        // Allow the user to add their own state reducer(s)
        ...(Array.isArray(getStateReducer())
          ? getStateReducer()
          : [getStateReducer()]),
      ].reduce(
        (s, handler) => handler(s, action, state, getInstance()) || s,
        state
      );
    },
    [getHooks, getStateReducer, getInstance]
  );

  // Start the reducer
  const [reducerState, dispatch] = React.useReducer(reducer, undefined, () =>
    reducer(initialState, { type: actions.init })
  );

  // Allow the user to control the final state with hooks
  const state = reduceHooks(
    [...getHooks().useControlledState, useControlledState],
    reducerState,
    { instance: getInstance() }
  );

  Object.assign(getInstance(), {
    state,
    dispatch,
  });

  // Decorate All the columns
  const columns = React.useMemo(
    () =>
      linkColumnStructure(
        reduceHooks(getHooks().columns, userColumns, {
          instance: getInstance(),
        })
      ),
    [
      getHooks,
      getInstance,
      userColumns,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().columnsDeps, [], { instance: getInstance() }),
    ]
  );
  getInstance().columns = columns;

  // Get the flat list of all columns and allow hooks to decorate
  // those columns (and trigger this memoization via deps)
  let allColumns = React.useMemo(
    () =>
      reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance(),
      }).map(assignColumnAccessor),
    [
      columns,
      getHooks,
      getInstance,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().allColumnsDeps, [], {
        instance: getInstance(),
      }),
    ]
  );
  getInstance().allColumns = allColumns;

  // Access the row model using initial columns
  const [rows, flatRows, rowsById] = React.useMemo(() => {
    let rows = [];
    let flatRows = [];
    const rowsById = {};

    const allColumnsQueue = [...allColumns];

    while (allColumnsQueue.length) {
      const column = allColumnsQueue.shift();
      accessRowsForColumn({
        data,
        rows,
        flatRows,
        rowsById,
        column,
        getRowId,
        getSubRows,
        accessValueHooks: getHooks().accessValue,
        getInstance,
      });
    }

    return [rows, flatRows, rowsById];
  }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]);

  Object.assign(getInstance(), {
    rows,
    initialRows: [...rows],
    flatRows,
    rowsById,
    // materializedColumns,
  });

  loopHooks(getHooks().useInstanceAfterData, getInstance());

  // Get the flat list of all columns AFTER the rows
  // have been access, and allow hooks to decorate
  // those columns (and trigger this memoization via deps)
  let visibleColumns = React.useMemo(
    () =>
      reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance(),
      }).map((d) => decorateColumn(d, defaultColumn)),
    [
      getHooks,
      allColumns,
      getInstance,
      defaultColumn,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().visibleColumnsDeps, [], {
        instance: getInstance(),
      }),
    ]
  );

  // Combine new visible columns with all columns
  allColumns = React.useMemo(() => {
    const columns = [...visibleColumns];

    allColumns.forEach((column) => {
      if (!columns.find((d) => d.id === column.id)) {
        columns.push(column);
      }
    });

    return columns;
  }, [allColumns, visibleColumns]);
  getInstance().allColumns = allColumns;

  // Make the headerGroups
  const headerGroups = React.useMemo(
    () =>
      reduceHooks(
        getHooks().headerGroups,
        makeHeaderGroups(visibleColumns, defaultColumn),
        getInstance()
      ),
    [
      getHooks,
      visibleColumns,
      defaultColumn,
      getInstance,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...reduceHooks(getHooks().headerGroupsDeps, [], {
        instance: getInstance(),
      }),
    ]
  );
  getInstance().headerGroups = headerGroups;

  // Get the first level of headers
  const headers = React.useMemo(
    () => (headerGroups.length ? headerGroups[0].headers : []),
    [headerGroups]
  );
  getInstance().headers = headers;

  // Provide a flat header list for utilities
  getInstance().flatHeaders = headerGroups.reduce(
    (all, headerGroup) => [...all, ...headerGroup.headers],
    []
  );

  loopHooks(getHooks().useInstanceBeforeDimensions, getInstance());

  // Filter columns down to visible ones
  const visibleColumnsDep = visibleColumns
    .filter((d) => d.isVisible)
    .map((d) => d.id)
    .sort()
    .join('_');

  visibleColumns = React.useMemo(
    () => visibleColumns.filter((d) => d.isVisible),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]
  );
  getInstance().visibleColumns = visibleColumns;
  
  // Header Visibility is needed by this point
  const [totalColumnsMinWidth, totalColumnsWidth, totalColumnsMaxWidth] =
    calculateHeaderWidths(headers);

  getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
  getInstance().totalColumnsWidth = totalColumnsWidth;
  getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;

  loopHooks(getHooks().useInstance, getInstance());

  // Each materialized header needs to be assigned a render function and other
  // prop getter properties here.
  [...getInstance().flatHeaders, ...getInstance().allColumns].forEach(
    (column) => {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column);

      // Give columns/headers a default getHeaderProps
      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column,
      });

      // Give columns/headers a default getFooterProps
      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column,
      });
    }
  );

  getInstance().headerGroups = React.useMemo(
    () =>
      headerGroups.filter((headerGroup, i) => {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter((column) => {
          const recurse = (headers) =>
            headers.filter((column) => {
              if (column.headers) {
                return recurse(column.headers);
              }
              return column.isVisible;
            }).length;
          if (column.headers) {
            return recurse(column.headers);
          }
          return column.isVisible;
        });

        // Give headerGroups getRowProps
        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(
            getHooks().getHeaderGroupProps,
            { instance: getInstance(), headerGroup, index: i }
          );

          headerGroup.getFooterGroupProps = makePropGetter(
            getHooks().getFooterGroupProps,
            { instance: getInstance(), headerGroup, index: i }
          );

          return true;
        }

        return false;
      }),
    [headerGroups, getInstance, getHooks]
  );

  getInstance().footerGroups = [...getInstance().headerGroups].reverse();

  // The prepareRow function is absolutely necessary and MUST be called on
  // any rows the user wishes to be displayed.

  getInstance().prepareRow = React.useCallback(
    (row) => {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row,
      });

      // Build the visible cells for each row
      row.allCells = allColumns.map((column) => {
        const value = row.values[column.id];

        const cell = {
          column,
          row,
          value,
        };

        // Give each cell a getCellProps base
        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell,
        });

        // Give each cell a renderer function (supports multiple renderers)
        cell.render = makeRenderer(getInstance(), column, {
          row,
          cell,
          value,
        });

        return cell;
      });

      row.cells = visibleColumns.map((column) =>
        row.allCells.find((cell) => cell.column.id === column.id)
      );

      // need to apply any row specific hooks (useExpanded requires this)
      loopHooks(getHooks().prepareRow, row, { instance: getInstance() });
    },
    [getHooks, getInstance, allColumns, visibleColumns]
  );

  getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
    instance: getInstance(),
  });

  getInstance().getTableBodyProps = makePropGetter(
    getHooks().getTableBodyProps,
    {
      instance: getInstance(),
    }
  );

  loopHooks(getHooks().useFinalInstance, getInstance());

  return getInstance();
};
`}
        </CodePane>
      </Box>
    </FlexBox>
  </Slide>
);

export default ReactTable2;
