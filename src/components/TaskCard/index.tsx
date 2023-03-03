import React from 'react';
import { 
  Text,
  TouchableOpacityProps,
  TouchableOpacity  
} from 'react-native';

import { styles } from './styles';
interface TaskProps extends TouchableOpacity {
    title: string;
  }
  
  interface TaskData {
    id: string;
    name: string;
  }

  function handleRemoveTask(id: string) {
    setTasks(oldState => oldState.filter(
      (      task: { id: string; }) => task.id != id
    ))
  }

  export function TaskCard({ title, ...rest }: TaskProps) {
    return (
      data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.buttonTask}
            onPress={() => handleRemoveTask(item.id)}
          >
            <Text style={styles.textTask}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}     
    );
  }

function setTasks(arg0: (oldState: any) => any) {
  throw new Error('Function not implemented.');
}
