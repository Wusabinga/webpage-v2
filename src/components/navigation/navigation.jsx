import classes from './navigation.module.css';
import { motion } from 'framer-motion';
import React from 'react';
import { Icon, IconButton } from 'rsuite';
import logo from '../../media/svg/default 1.svg';

export default function Navigation () {
  return (
    <>
      <motion.div className={classes.navBar}>
        <img className={classes.logo} src={logo} size="5x" />
        <IconButton
          size="lg"
          circle
          icon={<Icon icon="github-alt" size="5x" />}
          className={classes.icon}
        />
        <IconButton
          size="lg"
          circle
          color="#001932"
          icon={<Icon icon="linkedin" size="5x" />}
          className={classes.icon}
        />
        <IconButton
          size="lg"
          circle
          color="#001932"
          icon={<Icon icon="xing" />}
          className={classes.icon}
        />
      </motion.div>
    </>
  );
}
