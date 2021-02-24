import React from 'react';
import styled from 'styled-components';
import icon from '../images/icon.jpeg';

const ProfileWrapper = styled.div`
  padding: 0 10vw;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
`;

const ProfileContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 30%;
  border-radius: 50%;
`;

const ProfileText = styled.p`
  width: 60%;
  font-size: 20px;
`;

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileContents>
        <ProfileImage src={icon} alt='icon' />
        <ProfileText>
          初めまして、まさきと申します。22歳のバックエンドエンジニア志望です。<br />
          新卒で自動車部品製造会社に入社し、3年ほど働きました。<br />
          前職では機会エンジニアを担当し、日々スキルアップを行うため学習し行動してきました。。<br />
          ですがPCを触ることが好きなのでPCを使った仕事がしたい事、ものづくりに携わり続けたいと感じ、ITエンジニアへの転職を決めました。<br />
          現在はバックエンドエンジニアを目指しながら日々勉強しています。
        </ProfileText>
      </ProfileContents>
    </ProfileWrapper>
  )
}