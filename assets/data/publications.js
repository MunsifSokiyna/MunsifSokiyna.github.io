/*
  Publications list, grouped by category.
  To add a new publication: copy an object inside the right group's `items` array and edit it.
  Fields: authors, year, title, venue, status (optional badge text, e.g. "Conditionally Accepted"),
          link (DOI or URL, "" if none)
*/
const PUBLICATIONS = [
  {
    group: "Published Refereed Journal Articles",
    items: [
      {
        authors: "Sokiyna, M., Herfurth, A., & Sharma, P. N.",
        year: "2026",
        title: "Threat appraisal and coping strategies: How users navigate toxicity in online technical communities",
        venue: "Behavior & Information Technology",
        status: "",
        link: "https://doi.org/10.1080/0144929X.2026.2633774"
      },
      {
        authors: "Sokiyna, M., & Aqel, M.",
        year: "2020",
        title: "The role of e-business applications software in driving operational excellence: Impact of departmental collaboration using sustainable software",
        venue: "Sustainable Computing: Informatics and Systems, 28, 100445",
        status: "",
        link: "https://doi.org/10.1016/j.suscom.2020.100445"
      },
      {
        authors: "Sokiyna, M., Aqel, M., & Naqshbandi, O. A.",
        year: "2020",
        title: "Cloud-computing technology algorithm capabilities in managing and processing big data in business organizations: MapReduce, Hadoop, parallel programming",
        venue: "Journal of Information Technology Management, 12(3), 100–113",
        status: "",
        link: "https://doi.org/10.22059/jitm.2020.76298"
      },
      {
        authors: "Aljawarneh, N. M., Sokiyna, M., Obeidat, A. M., Alomari, K. A. K., Alradaideh, A. T., & Alomari, Z. S.",
        year: "2020",
        title: "The role of CRM fog computing on innovation and customer service quality: An empirical study",
        venue: "Sumy State University Working Paper Series",
        status: "",
        link: "https://essuir.sumdu.edu.ua/handle/123456789/78429"
      },
      {
        authors: "Aqel, M., Naqshbandi, O., Sokiyna, M., & Valentyn, P.",
        year: "2020",
        title: "Messaging-system design based on using servers and encoding system",
        venue: "International Association of Online Engineering Technical Report",
        status: "",
        link: "https://doi.org/10.3991/ijim.v14i10.15189"
      },
      {
        authors: "Khalaf, O., Sokiyna, M., Alotaibi, Y., Alsufyani, A., & Alghamdi, S.",
        year: "2021",
        title: "Web-attack detection using the input-validation method: DPDA theory",
        venue: "Computers, Materials & Continua, 68(3), 3167–3184",
        status: "",
        link: "https://doi.org/10.32604/cmc.2021.016099"
      }
    ]
  },
  {
    group: "Published Refereed Conference Proceedings",
    items: [

      {
        authors: "Sharma, P. N., Safadi, H., Karahanna, E., Hulland, J., & Sokiyna, M.",
        year: "2026",
        title: "Multi-project involvement and volunteer developers’ continued contribution to open-source software projects",
        venue: "Journal of Strategic Information Systems",
        Link: "Pending for production"
      },
      {
        authors: "Sokiyna, M., & Sharma, P. N.",
        year: "2026",
        title: "Threat Multiplier in Open Source Projects: Longitudinal Evidence on Conditional Resilience and Governance Limits",
        venue: "Proceedings of the 2026 Americas Conference on Information Systems (AMCIS)",
        status: "",
        link: "https://aisel.aisnet.org/amcis2026/vcc/vcc/1"
      },
      {
        authors: "Sokiyna, M., Herfurth, A., Das, S., & Sharma, P. N.",
        year: "2025",
        title: "When AI writes the code: Trust and community cohesion in OSS development",
        venue: "Proceedings of the 2025 International Conference on Information Systems (ICIS)",
        status: "",
        link: "https://aisel.aisnet.org/icis2025/gen_ai/gen_ai/5"
      },
      {
        authors: "Sokiyna, M., & Sharma, P. N.",
        year: "2024",
        title: "Aggressive, disrespectful, uncivil: An immersive examination of toxic communications as an obstacle for participation in open-source software communities",
        venue: "Proceedings of the 2024 Americas Conference on Information Systems (AMCIS), Paper No. 9",
        status: "",
        link: "https://aisel.aisnet.org/amcis2024/vcc/vcc/9"
      },
      {
        authors: "Sokiyna, M., Herfurth, A., & Sharma, P. N.",
        year: "2024",
        title: "Stack Overflow users’ responses to toxicity: An exploratory study",
        venue: "Proceedings of the 2024 Americas Conference on Information Systems (AMCIS), Paper No. 8",
        status: "",
        link: "https://aisel.aisnet.org/amcis2024/vcc/vcc/8"
      }
    ]
  },
  {
    group: "Under Review & Working Papers",
    items: [

      {
        authors: "Sharma, P. N., Herfurth, A., & Sokiyna, M.",
        year: "2025",
        title: "Mitigating licensing risks in AI-generated code",
        venue: "MISQ Executive",
        status: "Major Revision",
        link: ""
      },
      {
        authors: "Sokiyna, M., & Sharma, P. N.",
        year: "2025",
        title: "Toxicity in open source: Contextual detection and typology using OSS-specific models and large language models",
        venue: "Target: IEEE Transactions on Software Engineering",
        status: "In Preparation",
        link: ""
      },
      {
        authors: "Herfurth, A., Sokiyna, M., & Sharma, P. N.",
        year: "2024",
        title: "The impact of generative AI on open-source software developer motivations: An exploratory qualitative study",
        venue: "Presented at the OpenForum Academy Symposium, Harvard University · Target: Human–Computer Interaction",
        status: "In Preparation",
        link: ""
      }
    ]
  }
];
