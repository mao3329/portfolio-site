import React, { useState } from 'react';
import styled from 'styled-components';
import { PortfolioIntro } from './PortfolioIntro';

const PortfolioWrapper = styled.div`
  margin-bottom: 50px;
`;

const PortfolioContents = styled.div`
  margin: 0 auto;
`;

const PortfolioTop = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const PortfolioImg = styled.img`
  height: 160px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.3s;
  :hover{
    opacity: 0.6;
    transition-duration: 0.3s;
  }
`;

const PortfolioBottom = styled.div`
  height: 200px;
  text-align: center;
`;

export const Portfolio = () => {
  const [title, setTitle] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [text, setText] = useState("");
  const [sourceCodeUrl, setSourceCode] = useState("");
  const [technology, setTechnology] = useState("");

    const onClickOne = () => {
    setTitle("ポートフォリオサイト")
    setSiteUrl("https://mao3329.github.io/portfolio-site")
    setText("フロントのみの静的サイトです。")
    setSourceCode("https://github.com/mao3329/portfolio-site")
    setTechnology("React・HTML")
  }

  const onClicktwo = () => {
    setTitle("掲示板サイト")
    setSiteUrl("https://www.watchworld0730.tk/")
    setText("基本的なCRUD機能を持ったサイトです。")
    setSourceCode("https://github.com/mao3329/watch_world")
    setTechnology("Rails・Ruby・Docker・HTML・SCSS")
  }

  return (
    <PortfolioWrapper>
      <PortfolioContents>
        <PortfolioTop>
          <PortfolioImg src='#' onClick={onClickOne} />
          <PortfolioImg src='#' onClick={onClicktwo} />
        </PortfolioTop>
        <PortfolioBottom>
          {title &&
            <PortfolioIntro
              title={title}
              siteUrl={siteUrl}
              text={text}
              sourceCode={sourceCodeUrl}
              technology={technology}
            />
          }
        </PortfolioBottom>
      </PortfolioContents>
    </PortfolioWrapper>
  );
}