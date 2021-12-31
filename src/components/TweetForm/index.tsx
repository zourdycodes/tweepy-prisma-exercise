import * as React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Prisma } from '@prisma/client';

export interface IProps {
  onSubmit: (data: Prisma.TwitCreateInput) => Promise<void>;
}

export function TweepeyForm({ onSubmit }: IProps) {
  const { register, handleSubmit } = useForm();

  return (
    <div className="tweet__form--container">
      <div className="left__column">
        <div className="profile__photo">
          <Image
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png"
            layout="fill"
            className="profile__photo--img"
            alt="zunderbar"
          />
        </div>
      </div>
      <div className="right__column">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('body', { required: true })}
            placeholder="Are we in heaven, yet?"
          />
          <div className="btn__submit">
            <button type="submit">tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
}
