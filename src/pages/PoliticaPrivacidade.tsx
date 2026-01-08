const definitions = [
  {
    term: "Dado Pessoal",
    description:
      "informação relacionada a pessoa natural identificada ou identificável, ou seja, quaisquer dados que possam identificar uma pessoa."
  },
  {
    term: "Dado Pessoal Sensível",
    description:
      "dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural."
  },
  {
    term: "Titular",
    description: "pessoa natural a quem se referem os dados pessoais que são objeto de tratamento."
  },
  {
    term: "Tratamento de dados",
    description:
      "toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, tratamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração."
  },
  {
    term: "Controlador",
    description:
      "pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais."
  },
  {
    term: "Operador",
    description:
      "pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador."
  },
  {
    term: "Encarregado (sigla DPO - Data Protection Officer)",
    description:
      "pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD);"
  },
  {
    term: "Uso compartilhado de dados",
    description:
      "comunicação, difusão, transferência internacional, interconexão de dados pessoais ou tratamento compartilhado de bancos de dados pessoais por órgãos e entidades públicos no cumprimento de suas competências legais, ou entre esses e entes privados, reciprocamente, com autorização específica, para uma ou mais modalidades de tratamento permitidas por esses entes públicos, ou entre entes privados."
  }
];

const dataCategories = [
  {
    title: "Visitantes do Site e Redes Sociais",
    description:
      "endereço de e-mail, nome, telefone e outras informações que você deseja nos fornecer; informações técnicas, incluindo o endereço de protocolo da Internet (IP), tipo de navegador, fuso horário, data e hora de acesso; informações sobre sua visita, incluindo: log, cliques, tempo e frequência de acesso, geolocalização. Quando você interagir ou nos contatar por meio de um site ou plataforma de terceiros (como LinkedIn, Instagram, Facebook, YouTube, Twitter, TikTok e Threads), podemos coletar seu nome, cargo, empresa, endereço de e-mail, login, comentários e preferências a partir de suas curtidas."
  },
  {
    title: "Agentes financeiros",
    description:
      "Os dados coletados são, mas não se limitam a: dados de contato (nome, e-mail e telefone), dados de localização (país, estado, cidade e endereço), razão social, CNPJ, dados para fins de marketing (suas preferências), nome de usuário e senha para acesso ao nosso sistema."
  },
  {
    title: "Proprietário do imóvel",
    description:
      "Os dados coletados são, mas não se limitam a: dados de contato (nome, e-mail e telefone), dados de localização (país, estado, cidade e endereço), dados de identificação, razão social, CNPJ, dados do imóvel, dados para fins de marketing (suas preferências), nome de usuário e senha para acesso ao nosso sistema."
  },
  {
    title: "Cliente (tomador do empréstimo)",
    description:
      "Os dados coletados são, mas não se limitam a: dados de contato (nome, e-mail e telefone), dados de localização (país, estado, cidade e endereço), dados de identificação, razão social, CNPJ, dados do imóvel, dados para fins de marketing (suas preferências), nome de usuário e senha para acesso ao nosso sistema."
  },
  {
    title: "Colaboradores e terceirizados",
    description:
      "Os dados coletados são, mas não se limitam a: nome, idade, telefone, foto, e-mail, referências, dados bancários, histórico escolar e profissional, sexo, profissão, estado civil, cônjuge, número de identificação, especialização, além das informações exigidas por leis específicas. Podemos ainda coletar dados pessoais que você fornece a terceiros e são visíveis publicamente, como o LinkedIn, e/ou receber suas informações de agências especializadas em recrutamento e seleção."
  },
  {
    title: "Fornecedores e parceiros",
    description:
      "Nós podemos coletar e usar qualquer uma das seguintes informações sobre você: nome, cargo, informações de contato comercial (número de telefone, endereço para correspondência, e-mail, razão social, CNPJ), dados bancários, nome de usuário e senha para acesso ao sistema, além de dados pessoais que você fornece a terceiros e são visíveis publicamente, como o LinkedIn."
  }
];

const thirdPartySources = [
  "Agências de recrutamento e empregadores: se for um candidato a emprego, podemos contatar o seu recrutador, atuais e antigos empregadores para fornecer informações sobre si e a sua candidatura;",
  "Agentes financeiros: seu agente financeiro poderá usar nossa plataforma para armazenar seus dados;",
  "Fontes publicamente disponíveis: atualmente usamos fontes publicamente disponíveis para realizar verificações de identidade e veracidade das informações fornecidas."
];

const legalBasisRows = [
  {
    data: "Dados pessoais que coletamos para fornecer nossos serviços a você. Nome, e-mail, número de telefone.",
    purpose: [
      "fornecer produtos e serviços;",
      "enviar comunicações relacionadas aos serviços;",
      "prestar suporte;",
      "efetuar cobrança;",
      "disponibilizar acesso ao sistema."
    ],
    basis: "Execução de contrato, usado também para tomar medidas específicas antes de celebrar um contrato com você."
  },
  {
    data: "Dados pessoais que coletamos para efetuar um contrato com você. Nome, endereço, e-mail, número de telefone, número de registro de identificação, estado civil, dados do cônjuge, características do imóvel.",
    purpose: [
      "fornecer produtos e serviços;",
      "enviar comunicações relacionadas aos serviços;",
      "prestar suporte;",
      "efetuar cobrança;",
      "disponibilizar acesso ao sistema."
    ],
    basis: "Execução de contrato."
  },
  {
    data: "Dados pessoais que coletamos para efetuar a contratação de colaborador. Nome, endereço, e-mail, número de telefone, número de registro de identificação, estado civil, dados do cônjuge, dados de dependentes, escolaridade, experiência profissional.",
    purpose: ["recrutamento e seleção;", "contratação de colaborador;", "efetuar pagamentos."],
    basis: "Execução de contrato."
  },
  {
    data: "Informações do proprietário do imóvel como, dados de identificação, localização e contato; características do imóvel.",
    purpose: ["para elaborar laudo."],
    basis: "Execução de contrato."
  },
  {
    data: "Dados de contato de clientes atuais, futuros ou passados, que são enviados para nós ou coletados por nós, inclusive através do endereço de IP, além de curtidas e comentários em nosso site e redes sociais.",
    purpose: [
      "para fins de gerenciamento de contato, comunicação e relacionamento;",
      "para fornecer um serviço personalizado, melhorar nossos produtos e serviços e entender suas preferências;",
      "para entender a eficácia do nosso marketing, fornecer material de marketing."
    ],
    basis: "Interesse legítimo."
  },
  {
    data: "Dados de identificação.",
    purpose: ["para realizar verificações de identidade e veracidade das informações fornecidas."],
    basis: "Interesse legítimo."
  },
  {
    data: "Dados fiscais, dados de transações financeiras, dados exigidos pela receita federal, e-social e demais autoridades.",
    purpose: ["para fins de cumprimento legal e regulatório."],
    basis: "Obrigação legal."
  },
  {
    data: "Dados de identificação, localização e contato.",
    purpose: [
      "quando recebermos suas informações pessoais em nossa plataforma por terceiros, nós vamos solicitar seu consentimento para continuarmos a tratar seus dados;",
      "quando entendermos que nossas ofertas e publicidade não for atender suas expectativas legítimas, solicitaremos seu consentimento;",
      "quando seus dados não forem anonimizados para uso estatísticos, iremos solicitar seu consentimento."
    ],
    basis: "Consentimento."
  },
  {
    data: "Dados financeiros.",
    purpose: ["para realizar verificações da veracidade das informações fornecidas."],
    basis: "Proteção do crédito."
  }
];

const serviceProviders = [
  "serviços de desenvolvimento e hospedagem de sites;",
  "serviços de TI, administração de sistemas e segurança;",
  "serviços de marketing e publicidade;",
  "serviços de pagamentos;",
  "serviços bancários;",
  "serviços jurídicos, de contabilidade, auditoria, seguros e outros consultores profissionais;",
  "serviços de planos de saúde e odontológico;",
  "serviços de transporte;",
  "prestadores de serviços de recrutamento; e",
  "fornecedores de gestão de viagens e eventos."
];

const platformProviders = [
  "serviço de armazenamento em nuvem;",
  "provedor (aplicativo) de mensagem instantânea;",
  "provedores analíticos e buscadores que nos auxiliam na melhoria e otimização do nosso site."
];

const sharingSituations = [
  "Se formos adquiridos por terceiros, nesse caso, os dados pessoais que nos são mantidos sobre nossos clientes/colaboradores/fornecedores serão parte dos ativos transferidos.",
  "Se temos o dever de divulgar ou compartilhar seus dados pessoais a fim de cumprir qualquer obrigação legal, ou a fim de aplicar nossos termos de uso e outros acordos; e para fins de prevenção e/ou detecção de crimes. Isso inclui a troca de informações com organizações para fins de proteção contra fraudes, prevenção de lavagem de dinheiro e redução de riscos de crédito."
];

const retentionReasons = [
  "Comunicarmos com você sobre quaisquer dúvidas ou reclamações que você possa ter depois de deixar de ter um vínculo conosco (deixou de ser nosso cliente, usuário, fornecedor, parceiro ou colaborador);",
  "Para cumprir as legislações vigentes, como as regras contábeis e fiscais; ou",
  "Para fornecer a você informações relevantes sobre produtos e serviços nos quais acreditamos que você possa estar interessado."
];

const rights = [
  "Confirmação da existência de tratamento;",
  "Acesso aos dados;",
  "Correção de dados incompletos, inexatos ou desatualizados;",
  "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade;",
  "Portabilidade de seus dados;",
  "Eliminação dos dados tratados;",
  "Obtenção de informações sobre as entidades públicas ou privadas com as quais compartilhamos seus dados;",
  "Informação sobre a possibilidade de não fornecer o seu consentimento, bem como de ser informado sobre as consequências, em caso de negativa;",
  "Revogação do consentimento."
];

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white/90 pb-16 pt-28">
      <div className="page-container max-w-5xl space-y-10">
        <header className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">Privacidade</p>
          <h1 className="text-3xl font-bold text-brand-navy">Política de Privacidade</h1>
          <p className="text-sm text-slate-600">Atualizado em 2026.</p>
        </header>

        <section className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Aviso de Privacidade</h2>
            <p>
              Este Aviso de Privacidade descreve como o AGROCONSULT e suas afiliadas Agroconsult Participações Ltda e
              Agroconsult Tecnologia Ltda (coletivamente, "nós" ou "nosso") coletam, usam e compartilham suas
              informações pessoais em conexão com nosso site agroconsult.com.br, nossa plataforma agrovalora.com.br e
              quaisquer outros sites afiliados que operamos com links para este Aviso de Privacidade e nossos serviços
              e plataformas (coletivamente, e junto com o Site, os "Serviços"), e as opções que você tem com relação
              às suas informações pessoais. Ao utilizar nosso site e serviços, entendemos que você compreende os termos
              deste Aviso.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Quem somos, definições e agentes</h2>
            <p>
              A AGROCONSULT é uma consultoria especializada no agronegócio brasileiro. Somos uma empresa que associa
              uma orientação por dados e tecnologia às habilidades de uma equipe capacitada, multidisciplinar e com
              ampla experiência nos diversos elos da cadeia do agronegócio. Produzimos e fornecemos inteligência e
              informação sobre as principais cadeias agrícolas a quem, direta ou indiretamente, atua no setor.
            </p>
            <div className="space-y-1">
              <p>AGROCONSULT PARTICIPACOES LTDA - CNPJ: 18.172.823/0001-60</p>
              <p>AGROCONSULT TECNOLOGIA LTDA - CNPJ: 43.234.562/0001-02</p>
            </div>
            <div className="space-y-1">
              <p>
                Endereço: José Carlos Daux, 4756 - sala 02 - 1o andar - bloco B, condomínio Office Park, Saco Grande,
                Florianópolis /SC, 88032005 - Brasil.
              </p>
              <p>Telefone: (48) 3209-1650</p>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Definições</h2>
            <dl className="grid gap-3">
              {definitions.map((item) => (
                <div key={item.term} className="space-y-1">
                  <dt className="font-semibold text-brand-navy">{item.term}</dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Dados pessoais</h2>
            <p>Podemos processar diferentes tipos de dados pessoais sobre você, os quais agrupamos da seguinte forma:</p>
            <ul className="space-y-2">
              {dataCategories.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-brand-navy">{item.title}:</span> {item.description}
                </li>
              ))}
            </ul>
            <p>Por fim, podemos ainda receber informações sobre você por meio de terceiros:</p>
            <ul className="space-y-2">
              {thirdPartySources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Fundamentos legais</h2>
            <p>
              Dependendo da finalidade, contaremos com os seguintes fundamentos legais (conforme apropriado) para
              tratar seus dados pessoais, não se limitando a:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full text-left text-xs sm:text-sm">
                <thead className="text-brand-navy">
                  <tr>
                    <th className="py-2 pr-4">Dados pessoais</th>
                    <th className="py-2 pr-4">Finalidade do tratamento</th>
                    <th className="py-2">Hipótese legal</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {legalBasisRows.map((row) => (
                    <tr key={row.data} className="border-t border-slate-100 align-top">
                      <td className="py-3 pr-4">{row.data}</td>
                      <td className="py-3 pr-4">
                        <ul className="space-y-1">
                          {row.purpose.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-3">{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Com quem é compartilhado</h2>
            <p>
              Nós podemos compartilhar alguns de seus dados com nossos prestadores de serviços relacionados à operação
              da AGROCONSULT. Esses compartilhamentos são necessários para podermos fornecer serviços adequados às suas
              necessidades. Podemos compartilhar algumas de suas informações pessoais a:
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-brand-navy">Prestadores de serviços:</p>
              <ul className="space-y-1">
                {serviceProviders.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-brand-navy">Provedores de serviços:</p>
              <ul className="space-y-1">
                {platformProviders.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p>Além disso, divulgaremos suas informações pessoais para terceiros nas seguintes situações:</p>
            <ul className="space-y-2">
              {sharingSituations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Ressaltamos que utilizamos parceiros e fornecedores que estejam comprometidos com a privacidade e
              segurança da informação.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Cookies, links e segurança</h2>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-brand-navy">Cookies</h3>
              <p>
                Usamos cookies, que são pequenos arquivos colocados em seu computador, essenciais para o funcionamento
                e funcionalidade dos nossos serviços. Para mais informações sobre os cookies que utilizamos, consulte
                nossa Política de Cookies.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-brand-navy">Links de terceiros</h3>
              <p>
                Nosso website pode incluir links para sites, plug-ins e aplicativos de terceiros. Clicar nesses links ou
                habilitar essas conexões pode permitir que terceiros coletem ou compartilhem dados sobre você. Não
                controlamos esses sites de terceiros e não somos responsáveis por suas declarações de privacidade. Ao
                sair do nosso site, recomendamos que você leia o aviso de privacidade de todos os sites que visitar.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-brand-navy">Segurança</h3>
              <p>
                Quando você nos fornecer seus dados pessoais, nós os processaremos usando nossos sistemas, o que
                significa que seus dados serão inseridos em nossos bancos de dados. Temos medidas de segurança
                apropriadas para ajudar a garantir que seus dados não sejam perdidos, roubados, acessados por terceiros
                não autorizados ou adulterados de qualquer forma. Internamente, seus dados pessoais só estarão
                acessíveis aos membros de nossa equipe que tenham necessidade de acessar seus dados (o que dependerá da
                natureza dos serviços que estamos fornecendo a você).
              </p>
              <p>
                Adotamos medidas administrativas como: políticas de segurança da informação, termos de
                confidencialidade, política de senhas, além de possuirmos instalações seguras com vigilância no local.
                Adotamos medidas técnicas de segurança, tais como: backup online e offline, anti-vírus, anti-malware,
                além de atualizarmos periodicamente nossos softwares.
              </p>
              <p>
                Em algumas circunstâncias, podemos anonimizar seus dados pessoais, para que não possam mais ser
                associados a você, para fins de pesquisa ou estatística, caso em que podemos usar essas informações
                indefinidamente sem aviso prévio.
              </p>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Por quanto tempo guardamos suas informações</h2>
            <p>
              Retemos suas informações pelo período necessário para cumprir os propósitos pelos quais seus dados foram
              coletados, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Geralmente,
              mantemos seus dados pessoais para que possamos:
            </p>
            <ul className="space-y-2">
              {retentionReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Seus direitos</h2>
            <p>
              Em cumprimento à Lei Geral de Proteção de Dados pessoais (LGPD), no que diz respeito ao tratamento de
              dados pessoais, nós, enquanto Controlador de seus dados pessoais, respeitamos e garantimos ao Titular a
              possibilidade de apresentação de solicitações baseadas nos seguintes direitos:
            </p>
            <ul className="space-y-2">
              {rights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Quando desejar acessar qualquer informação pessoal que mantemos sobre você, acesse nosso{" "}
              <a
                href="https://forms.gle/yyff779RSGqthuNa9"
                className="font-semibold text-brand-green underline"
                target="_blank"
                rel="noreferrer"
              >
                https://forms.gle/yyff779RSGqthuNa9
              </a>
              . O titular de tais informações estará sujeito ao fornecimento de evidências adequadas de sua identidade.
            </p>
            <p>
              Quando você necessitar de mais informações ou desejar exercer seus direitos, por favor, entre em contato
              com nossa encarregada de dados pessoais (DPO), Juliana Heller, pelo e-mail:{" "}
              <a href="mailto:juliana@lgpdnacional.com.br" className="font-semibold text-brand-green underline">
                juliana@lgpdnacional.com.br
              </a>
              , ou através do contato disponibilizado em nosso site.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl bg-white p-5 shadow-panel ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-brand-navy">Atualização do aviso</h2>
            <p>
              Quaisquer alterações que possamos fazer ao nosso Aviso de Privacidade no futuro serão publicadas nesta
              página. Convidamos você a visitar nosso site com frequência para verificar quaisquer atualizações ou
              alterações em nosso Aviso.
            </p>
            <p className="font-semibold text-brand-navy">Atualizado em 2026.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
