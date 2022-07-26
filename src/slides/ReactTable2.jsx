import { Slide, CodePane, FlexBox, Heading, Box, Appear } from 'spectacle';

const ReactTable2 = () => (
  <Slide>
    <FlexBox height="100%" flexDirection={'column'} justifyContent="start">
      <Heading fontSize={64}>useTable</Heading>
      <Box height={500} overflow="scroll">
        <CodePane language="jsx">
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

  /**
   * export function useGetLatest(obj) {
   *   const ref = React.useRef();
   *   ref.current = obj;
   * 
   *   return React.useCallback(() => ref.current, []);
   * }
  */

  // Assign the props, plugins and hooks to the instance
  Object.assign(getInstance(), {
    ...props,
    plugins,
    hooks: makeDefaultPluginHooks(),
  })

  /**
   * const defaultGetTableProps = (props) => ({
   *   role: 'table',
   *   ...props,
   * });
   * // ...
   * export default function makeDefaultPluginHooks() {
   *   return {
   *     // ...
   *     getTableProps: [defaultGetTableProps],
   *     getTableBodyProps: [defaultGetTableBodyProps],
   *     getHeaderGroupProps: [defaultGetHeaderGroupProps],
   *     getFooterGroupProps: [defaultGetFooterGroupProps],
   *     // ...
   *   };
   * }
  */

  // ......

  // Consume all hooks and make a getter for them
  const getHooks = useGetLatest(getInstance().hooks)
  getInstance().getHooks = getHooks
  delete getInstance().hooks

  // ......

  getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
    instance: getInstance(),
  });

  /**
   * // HOF
   * export const makePropGetter = (hooks, meta = {}) => {
   *   return (userProps = {}) =>
   *     [...hooks, userProps].reduce(
   *       (prev, next) =>
   *         handlePropGetter(prev, next, {
   *           ...meta,
   *           userProps,
   *         }),
   *       {}
   *     )
   * }
  */

  // ......

  return getInstance();
};
`}
        </CodePane>
      </Box>
    </FlexBox>
  </Slide>
);

export default ReactTable2;
