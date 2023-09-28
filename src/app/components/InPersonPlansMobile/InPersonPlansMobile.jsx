import { PlanCardMobile } from '../PlanCardMobile/PlanCardMobile'

export function InPersonPlansMobile({ type }) {
  return (
    <article className='flex flex-col items-center justify-evenly my-2'>
      <section
        className={`${
          type !== 'in-person' ? 'hidden' : ''
        } flex flex-row justify-evenly items-stretch gap-3`}
        name='10-sessions'
      >
        <PlanCardMobile
          plan='10 sessions'
          color1='#666565'
          color2='#1D1D1D'
          title='10 sessions'
          price='749'
          decimals='99'
          description='Perfect for first-timers and individuals seeking to improve their overall fitness.'
          bullets={[
            'Ten one-hour training sessions in person with me',
            'Clients training with me 2 or more times a week will get the online coaching package included'
          ]}
        />
      </section>

      <section
        className={`${
          type !== 'in-person' ? 'hidden' : ''
        } flex flex-row justify-evenly items-stretch gap-3`}
        name='30-sessions'
      >
        <PlanCardMobile
          plan='30 sessions'
          color1='#A90000'
          color2='#3F0000'
          title='30 sessions'
          price='2249'
          decimals='97'
          description='Tailored for elite athletes competing in physique and strength-related sports.'
          bullets={[
            'Thirty one-hour training sessions in person with me',
            'Clients training with me 2 or more times a week will get the online coaching package included'
          ]}
        />
      </section>
    </article>
  )
}
