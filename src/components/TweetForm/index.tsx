import * as React from 'react';
import { useForm } from 'react-hook-form';

export const TweetForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form action="">
        <input type="text" />
        <button type="submit">submit</button>
      </form>
      s
    </div>
  );
};
