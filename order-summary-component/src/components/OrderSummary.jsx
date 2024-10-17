import React from 'react';
import styled from 'styled-components';
import './OrderSummary.scss';
import styles from './OrderSummary.module.css';
import heroImage from '/illustration-hero.svg';

const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 32px;
  text-align: center;
`;

const Title = styled.h2`
  color: hsl(223, 47%, 23%);
  font-size: 28px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: hsl(224, 23%, 55%);
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const PlanBox = () => (
  <div className="plan-box">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <g fill="none" fill-rule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#DFE6FB"/>
        <path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.612z"/>
      </g>
    </svg>
    <div>
      <h4>Annual Plan</h4>
      <p>$59.99/year</p>
    </div>
    <a href="#">Change</a>
  </div>
);

const Button = () => (
  <button className={styles.button}>
    Proceed to Payment
  </button>
);

const CancelLink = () => (
  <a 
    href="#" 
    style={{
      color: 'hsl(224, 23%, 55%)',
      display: 'block',
      fontWeight: 700,
      marginTop: '24px',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    }}
  >
    Cancel Order
  </a>
);

const OrderSummary = () => {
  return (
    <Card>
      <HeroImage src={heroImage} alt="Hero illustration" />
      <Content>
        <Title>Order Summary</Title>
        <Description>
          You can now listen to millions of songs, audiobooks, and podcasts on any 
          device anywhere you like!
        </Description>
        <PlanBox />
        <Button />
        <CancelLink />
      </Content>
    </Card>
  );
};

export default OrderSummary;