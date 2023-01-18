/*
Copyright (c) 2023 Nikki James Pack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import React from "react";
import { PropsWithChildren } from 'react'

import BaseStyles from '../Base/Base.module.scss'
import './Heading.module.scss'

export interface HeadingProps {
  variant: string;
  classes: string;
}

const Heading = (props: PropsWithChildren<HeadingProps>) => {
  switch (props.variant) {
    case 'h1':
      return (<h1 className={[BaseStyles.robco, props.classes].join(' ')}>{props.children}</h1>)
    case 'h2':
      return (<h2 className={[BaseStyles.robco, props.classes].join(' ')}>{props.children}</h2>)
    case 'h3':
      return (<h3 className={[BaseStyles.robco, props.classes].join(' ')}>{props.children}</h3>)
    default:
      return (<h1 className={[BaseStyles.robco, props.classes].join(' ')}>{props.children}</h1>)
  }
};

export default Heading;
