import { styles } from './styles';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';

interface TaskCardProps extends TouchableOpacityProps {
  title: string;
}

export function TaskCard({ title, ...rest }: TaskCardProps) {
  return (
    <TouchableOpacity
        style={styles.buttonTask}
        {...rest}
      >
        <Text style={styles.textTask}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}