import { arrayOfSocialMidias } from "../services/data"
import { BoxCopyRight, BoxFollowMe, BoxSocialIcons, ContainerFooter } from "../styles/Footer"

function Footer() {
  return (
    <ContainerFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.5}}
    >
      <BoxCopyRight>
        <p>Copyright&copy;2023 All rights reserved.Made by</p>
        <span>Marcos Vinicius</span>
      </BoxCopyRight>
      <BoxFollowMe>
        <h4>Me siga</h4>
        <div className="stick"></div>
        <BoxSocialIcons>
            { arrayOfSocialMidias.map((social) => (
                <a key={social.id} href={social.link} target="_blank" rel="noreferrer">
                  <social.icon />
                </a>
              ))
            }
        </BoxSocialIcons>

        <p>Documentação desse <a href="https://github.com/viniciusRogatti/viniciusRogatti.github.io" target="_blank" rel="noreferrer">portfolio</a></p>

      </BoxFollowMe>
    </ContainerFooter>
  )
}

export default Footer;