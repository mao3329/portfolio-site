import React from 'react';
import styled from 'styled-components';

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
  width: 35%;
  border-radius: 50%;
`;

const ProfileText = styled.p`
  width: 60%;
`;

export const Profile = () => {
  return(
    <ProfileWrapper>
      <ProfileContents>
        <ProfileImage src="#" />
        <ProfileText>
          初めまして、まさきと申します。22歳のバックエンドエンジニア志望です。<br />
          新卒で自動車部品製造会社に入社し、3年ほど働きました。<br />
          前職ではメカニカルエンジニアを担当し、日々スキルアップを行うため主体的に学習し行動してきました。エンジニアとして知識をつけながらできることを増やしていくのはとても楽しかったです。<br />
          ですがPCを触ることが好きなのでPCを使った仕事がしたい事、レガシーな企業文化とモダンな企業で働きたい自分の考えにギャップを感じました。<br />
          そこからIT業界に携わりたい！と強く感じ転職を決めました。<br />
          現在はバックエンドエンジニアを目指しながら日々勉強しています。
        </ProfileText>
      </ProfileContents>
    </ProfileWrapper>
  )
}