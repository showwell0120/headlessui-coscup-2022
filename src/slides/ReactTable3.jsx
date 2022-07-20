import { Slide, CodePane, FlexBox, Heading, Box } from 'spectacle';

const ReactTable3 = () => (
  <Slide>
    <FlexBox height="100%" flexDirection={'column'} justifyContent="start">
      <Heading fontSize={64}>makeDefaultPluginHooks</Heading>
      <Box height={500} overflow="scroll">
        <CodePane language="jsx">
          {`
const defaultGetTableProps = (props) => ({
  role: 'table',
  ...props,
});

const defaultGetTableBodyProps = (props) => ({
  role: 'rowgroup',
  ...props,
});

const defaultGetHeaderProps = (props, { column }) => ({
  colSpan: column.totalVisibleHeaderCount,
  role: 'columnheader',
  ...props,
});

const defaultGetFooterProps = (props, { column }) => ({
  key: '...',
  colSpan: column.totalVisibleHeaderCount,
  ...props,
});

const defaultGetHeaderGroupProps = (props, { index }) => ({
  key: '...',
  role: 'row',
  ...props,
});

const defaultGetFooterGroupProps = (props, { index }) => ({
  key: '...',
  ...props,
});

const defaultGetRowProps = (props, { row }) => ({
  key: '...',
  role: 'row',
  ...props,
});

const defaultGetCellProps = (props, { cell }) => ({
  key: '...',
  role: 'cell',
  ...props,
});

export default function makeDefaultPluginHooks() {
  return {
    useOptions: [],
    stateReducers: [],
    useControlledState: [],
    columns: [],
    columnsDeps: [],
    allColumns: [],
    allColumnsDeps: [],
    accessValue: [],
    materializedColumns: [],
    materializedColumnsDeps: [],
    useInstanceAfterData: [],
    visibleColumns: [],
    visibleColumnsDeps: [],
    headerGroups: [],
    headerGroupsDeps: [],
    useInstanceBeforeDimensions: [],
    useInstance: [],
    prepareRow: [],
    getTableProps: [defaultGetTableProps],
    getTableBodyProps: [defaultGetTableBodyProps],
    getHeaderGroupProps: [defaultGetHeaderGroupProps],
    getFooterGroupProps: [defaultGetFooterGroupProps],
    getHeaderProps: [defaultGetHeaderProps],
    getFooterProps: [defaultGetFooterProps],
    getRowProps: [defaultGetRowProps],
    getCellProps: [defaultGetCellProps],
    useFinalInstance: [],
  };
}
`}
        </CodePane>
      </Box>
    </FlexBox>
  </Slide>
);

export default ReactTable3;
