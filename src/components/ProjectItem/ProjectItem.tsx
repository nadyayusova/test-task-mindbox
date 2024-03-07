import { ElementType, HTMLAttributes, ReactNode } from 'react';

interface ProjectItemProps extends HTMLAttributes<HTMLOrSVGElement> {
  children: ReactNode;
  otherProps?: HTMLAttributes<HTMLElement>[];
  as?: ElementType;
}

function ProjectItem({ as: Tag = 'div', children, ...otherProps }: ProjectItemProps) {
  return <Tag {...otherProps}>{children}</Tag>;
}

export default ProjectItem;
