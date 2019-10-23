import React, {useContext} from 'react';

const SubscriptionContext = React.createContext();

export default SubscriptionContext;
export const useSubscriptionContext = () => useContext(SubscriptionContext);