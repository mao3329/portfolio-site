import React from 'react';
import styled from 'styled-components';
import '../Rate.css';

const SkillLists = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  margin-bottom: 50px;
  flex-basis: 48%;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
  border-radius: 5px;
`;

const CardTop = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardText = styled.p`

`;

const CardContents = styled.table`
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
  table-layout: fixed;
`;

const CardThead = styled.thead`
  margin-bottom: 40px;
`;

const CardTr = styled.tr`
  margin: 20px 0;
`;

const CardTh = styled.th`
  text-align: center;
  font-weight: bold;
`;

const CardTbody = styled.tbody`

`;

const CardTd = styled.td`
  text-align: center;
`;

export const Card = () => {
  return (
    <SkillLists>
      <CardWrapper>
        <CardTop>
          <CardTitle>Back End</CardTitle>
          <CardText>Railsをメインに学んでいます。</CardText>
        </CardTop>
        <CardContents>
          <CardThead>
            <CardTr>
              <CardTh>Technology</CardTh><CardTh>Experience</CardTh><CardTh>Skill</CardTh>
            </CardTr>
          </CardThead>
          <CardTbody>
            <CardTr>
              <CardTd>Ruby on Rails</CardTd><CardTd>4month</CardTd><CardTd><p className="rate rate3" /></CardTd>
            </CardTr>
          </CardTbody>
        </CardContents>
      </CardWrapper>

      <CardWrapper>
        <CardTop>
          <CardTitle>Design・Coding</CardTitle>
          <CardText>一通り基本のことをできます。</CardText>
        </CardTop>
        <CardContents>
          <CardThead>
            <CardTr>
              <CardTh>Technology</CardTh><CardTh>Experience</CardTh><CardTh>Skill</CardTh>
            </CardTr>
          </CardThead>
          <CardTbody>
            <CardTr>
              <CardTd>HTML5</CardTd><CardTd>4month</CardTd><CardTd><p className="rate rate3" /></CardTd>
            </CardTr>
            <CardTr>
              <CardTd>CSS3</CardTd><CardTd>4month</CardTd><CardTd><p className="rate rate3" /></CardTd>
            </CardTr>
          </CardTbody>
        </CardContents>

      </CardWrapper>

      <CardWrapper>
        <CardTop>
          <CardTitle>Front End</CardTitle>
          <CardText>簡単な触りだけやっています。</CardText>
        </CardTop>
        <CardContents>
          <CardThead>
            <CardTr>
              <CardTh>Technology</CardTh><CardTh>Experience</CardTh><CardTh>Skill</CardTh>
            </CardTr>
          </CardThead>
          <CardTbody>
            <CardTr>
              <CardTd>JavaScript</CardTd><CardTd>1month</CardTd><CardTd><p className="rate rate1" /></CardTd>
            </CardTr>
            <CardTr>
              <CardTd>React.js</CardTd><CardTd>1month</CardTd><CardTd><p className="rate rate1" /></CardTd>
            </CardTr>
          </CardTbody>
        </CardContents>
      </CardWrapper>

      <CardWrapper>
        <CardTop>
          <CardTitle>DB</CardTitle>
          <CardText>基本的な操作はできます。</CardText>
        </CardTop>
        <CardContents>
          <CardThead>
            <CardTr>
              <CardTh>Technology</CardTh><CardTh>Experience</CardTh><CardTh>Skill</CardTh>
            </CardTr>
          </CardThead>
          <CardTbody>
            <CardTr>
              <CardTd>MySQL</CardTd><CardTd>4month</CardTd><CardTd><p className="rate rate2" /></CardTd>
            </CardTr>
          </CardTbody>
        </CardContents>
      </CardWrapper>

      <CardWrapper>
        <CardTop>
          <CardTitle>Infrastructure</CardTitle>
          <CardText>デプロイまで行いました。</CardText>
        </CardTop>
        <CardContents>
          <CardThead>
            <CardTr>
              <CardTh>Technology</CardTh><CardTh>Experience</CardTh><CardTh>Skill</CardTh>
            </CardTr>
            <CardTr>
              <CardTd>AWS EC2</CardTd><CardTd>1month</CardTd><CardTd><p className="rate rate1" /></CardTd>
            </CardTr>
            <CardTr>
              <CardTd>AWS S3</CardTd><CardTd>1month</CardTd><CardTd><p className="rate rate1" /></CardTd>
            </CardTr>
          </CardThead>
          <CardTbody>
            <CardTr>
              <CardTd>NGINX</CardTd><CardTd>1month</CardTd><CardTd><p className="rate rate1" /></CardTd>
            </CardTr>
          </CardTbody>
        </CardContents>
      </CardWrapper>

      <CardWrapper>
        <CardTop>
          <CardTitle>Other</CardTitle>
          <CardText>開発で使用した技術です。</CardText>
        </CardTop>
        <CardContents>
          <CardThead>
            <CardTr>
              <CardTh>Technology</CardTh><CardTh>Experience</CardTh><CardTh>Skill</CardTh>
            </CardTr>
          </CardThead>
          <CardTbody>
            <CardTr>
              <CardTd>Docker</CardTd><CardTd>2month</CardTd><CardTd><p className="rate rate2" /></CardTd>
            </CardTr>
            <CardTr>
              <CardTd>Git</CardTd><CardTd>4month</CardTd><CardTd><p className="rate rate2" /></CardTd>
            </CardTr>
            <CardTr>
              <CardTd>Slack</CardTd><CardTd>4month</CardTd><CardTd><p className="rate rate5" /></CardTd>
            </CardTr>
            <CardTr>
              <CardTd>VScode</CardTd><CardTd>4month</CardTd><CardTd><p className="rate rate3" /></CardTd>
            </CardTr>
          </CardTbody>
        </CardContents>
      </CardWrapper>
    </SkillLists>
  )
}