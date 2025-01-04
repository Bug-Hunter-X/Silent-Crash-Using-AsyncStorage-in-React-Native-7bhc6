```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
    // Handle error appropriately, e.g., display an error message
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null; // Or throw the error, depending on your needs
  }
};

// Example usage:
storeData('@my_key', { name: 'John Doe', age: 30 })
  .then(() => console.log('Data stored successfully'))
  .catch((error) => console.error('Error storing data:', error));

getData('@my_key')
  .then((value) => console.log('Data retrieved:', value))
  .catch((error) => console.error('Error retrieving data:', error));
```