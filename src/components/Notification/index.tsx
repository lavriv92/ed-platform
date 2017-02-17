import * as React from 'react';

interface NotificationProps {
  message: string,
  type?: string
}

export default class Notification extends React.Component<NotificationProps, any> {
  render() {
    let {message} = this.props;
    let type = "success"
    return <div className={`notification ${type}`}>{message}</div>;
  }
}
