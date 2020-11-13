import React from 'react';

import cn from 'classnames';
import styles from './Heading.module.scss';

interface HeadingProps {
 size: string
 title: string
 className?: any
}

const getHeadingSize = (size: string, title: string) => {
 const defaultSize = <h1>{title}</h1>;

 if (size === 'xl') {
  return <h1 className={cn(styles.xl)}>{title}</h1>;
 }
 if (size === 'x') {
  return <h2 className={cn(styles.l)}>{title}</h2>;
 }
 if (size === 'm') {
  return <h3 className={cn(styles.m)}>{title}</h3>;
 }
 if (size === 's') {
  return <h4 className={cn(styles.s)}>{title}</h4>;
 }
 if (size === 'xs') {
  return <h5 className={cn(styles.xs)}>{title}</h5>;
 }
 if (size === 'xxs') {
  return <h6 className={cn(styles.xxs)}>{title}</h6>;
 }
 else {
  return defaultSize;
 }
};

const Heading: React.FC<HeadingProps> = ({ size, title }) => {
 return getHeadingSize(size, title);
};

export default Heading;