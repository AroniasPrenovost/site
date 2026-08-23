import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '24px' }}>
        Loading GitHub repos...
      </p>
    );
  };
}
export default WithListLoading;
