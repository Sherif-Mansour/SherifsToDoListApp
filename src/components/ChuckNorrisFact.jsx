import React from 'react';
import {Text} from 'react-native';

const ChuckNorrisFact = ({}) => {
  const [display, setDisplay] = React.useState(
    'This is where the message will show',
  );

  const callApi = async () => {
    /* // Method 1: Using fetch
        const response = await fetch('https://techy-api.vercel.app/api/json', {
          method: 'GET',
        });
    
        const json = await response.json();
    
        // const message = json.message;
        const {message} = json;
    
        setDisplay(message);
        */

    // Method 2: Using Android emulator
    const response = await fetch('http://10.0.2.2:3333/fact', {method: 'GET'});
    const json = await response.json();

    // const fact = json.fact;
    const {fact} = json;

    setDisplay(fact);
  };

  React.useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <Text style={{fontSize: 22}}>{display}</Text>
    </>
  );
};

export default ChuckNorrisFact;
