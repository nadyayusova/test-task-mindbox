import { ComponentPropsWithoutRef, ElementType } from 'react';

type ProjectItemProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

function ProjectItem<T extends ElementType>({ as, children, ...otherProps }: ProjectItemProps<T>) {
  const Tag = as || 'div';
  return <Tag {...otherProps}>{children}</Tag>;
}

export default ProjectItem;
