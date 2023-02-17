import { BoxTitle } from '../styles/Title';

interface ITitle {
  title: string;
  subTitle: string;
}

function Title({ title, subTitle }: ITitle) {
  return (
    <BoxTitle
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 1, delay: 0.3,  ease: 'easeOut' }}
  >
    <span>{title}</span>
    <h1>{subTitle}</h1>
  </BoxTitle>
  )
}

export default Title;

