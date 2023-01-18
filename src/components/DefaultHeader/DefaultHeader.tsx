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
import { TypeAnimation } from "react-type-animation";

import BaseStyles from '../Base/Base.module.scss'
import styles from './DefaultHeader.module.scss'

export interface DefaultHeaderProps {
    label1?: string;
    label2?: string;
    serverlabel?: string;
}

const DefaultHeader = (props: PropsWithChildren<DefaultHeaderProps>) => {
    return (<div className={[styles.wrapper, BaseStyles.robco].join(' ')}>
        <TypeAnimation
            sequence={[
                props.label1 || 'RobCo Industries Unified Operating System',
                () => {
                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            speed={70}
            className={styles.headerline}
            />
        <TypeAnimation
            sequence={[
                1500,
                props.label2 || 'Copyright 2075-2077 RobCo Industries'
            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            speed={70}
            className={styles.headerline}
            />
        <TypeAnimation
            sequence={[
                3000,
                props.serverlabel || '-Server 1-'
            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            speed={70}
            className={styles.serverline}
            />
    </div>);
}

export default DefaultHeader;
