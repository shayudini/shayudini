// https://stackoverflow.com/questions/54049871/how-do-i-type-this-as-jsx-attribute-in-typescript
import * as React from 'react';

// AnyTag is anything that a JSX tag can be.
type AnyTag =
  | string
  | React.FunctionComponent<never>
  | (new (props: never) => React.Component);

// PropsOf tries to get the expected properties for a given HTML tag name or component.
type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never;

// Here's our magic component!
// Note two things:
//   - A type called AnyTag
//   - A utility type called PropsOf
function Button<Tag extends AnyTag>(
  props: { as: Tag } & PropsOf<Tag> & {
      children: React.ReactNode;
    }
): JSX.Element;

function Button(props: any) {
  return <div {...props} />;
}

export default Button;
