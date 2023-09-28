import { PlanCardMobile } from '../PlanCardMobile/PlanCardMobile'

export function OnlinePlansMobile({ plan, type }) {
  return (
    <>
      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-col justify-evenly items-stretch ${
          plan !== 'monthly' ? 'hidden' : ''
        }`}
        name='monthly'
      >
        {/* STANDARD CARD */}
        <PlanCardMobile
          plan='month'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='149'
          decimals='99'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
        />

        {/* COMPETITIVE CARD */}
        <PlanCardMobile
          plan='month'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='199'
          decimals='99'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
        />
      </section>

      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-col justify-evenly items-stretch ${
          plan !== '3-months' ? 'hidden' : ''
        }`}
        name='3-months'
      >
        {/* STANDARD CARD */}
        <PlanCardMobile
          plan='3 months'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='449'
          decimals='97'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
        />

        {/* COMPETITIVE CARD */}
        <PlanCardMobile
          plan='3 months'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='599'
          decimals='97'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
        />
      </section>

      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-col justify-evenly items-stretch ${
          plan !== '6-months' ? 'hidden' : ''
        }`}
        name='6-months'
      >
        {/* STANDARD CARD */}
        <PlanCardMobile
          plan='6 months'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='824'
          decimals='94'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
        />

        {/* COMPETITIVE CARD */}
        <PlanCardMobile
          plan='6 months'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='1099'
          decimals='94'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
        />
      </section>

      <section
        className={`${
          type !== 'online' ? 'hidden' : ''
        } flex flex-col justify-evenly items-stretch ${
          plan !== 'annual' ? 'hidden' : ''
        }`}
        name='annual'
      >
        {/* STANDARD CARD */}
        <PlanCardMobile
          plan='year'
          color1='#666565'
          color2='#1D1D1D'
          title='Standard'
          price='1649'
          decimals='89'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord'
          ]}
        />

        {/* COMPETITIVE CARD */}
        <PlanCardMobile
          plan='year'
          color1='#DDBE1A'
          color2='#211800'
          title='Competitive'
          price='2199'
          decimals='89'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Access to all training programs',
            'Nutrition guidance & education',
            'Supplementation advice',
            'Weekly check-ins and updates',
            'Access to Discord',
            'Contest preparation & guidance'
          ]}
        />
      </section>
    </>
  )
}
