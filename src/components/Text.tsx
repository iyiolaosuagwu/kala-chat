import React from 'react';

type TextProps <C extends React.ElementType> = {
    as?: C,
    children: React.ReactNode
} & React.ComponentPropsWithoutRef<C>

export const Text = <C extends React.ElementType = "span"> ({as, children, ...restProps}: TextProps<C>) => {
    const Component = as || 'span';
    return <Component {...restProps}>{children}</Component>
}


// NOTE
// 1. make sure as props is a valid HTML emlement
// 2  Receiving only valid component props based on the generic prop e.g 
    // (<Text as="a" href="">Text</Text>) : correct 
    // <Text as="h2" href="">Text</Text> : wrong
    // href="" is not a valid attribute on h2 element
// 3.  Extend the component to receive other relevant props (...restProps)
// 4. add a default element type = (<C extends React.ElementType = "span">)