import React from "react";
import Styles from "../CourceDetails/index.module.scss"
import Image from "../Assets/graphic.jpg";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CommanHeading from "../component/CommanHeading";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";

const SociologySyllabus = () => {
  return (
    <>
      <CommanBanner section="SOCIOLOGY SYLLABUS" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>Advance WordPress Development Class</h2>
                <p>
                  Bimply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specime book. It has survived
                  not only five centuries.
                </p>
                <img src={Image} alt="image" />
                <CommanHeading
                  heading="PAPPER-1"
                />
                <CommanHeading
                  heading="FUNDAMENTALS OF SOCIOLOGY"
                />
                <CommanHeading
                  heading="1. Sociology - The Discipline"
                />
                <Item para="Modernity and social changes in Europe and emergence of sociology." />
                <Item para="Scope of the subject and comparison with other social sciences." />
                <Item para="Sociology and common sense." />

                <CommanHeading
                  heading="2. Sociology As Science:"
                />
                <Item para="Science, scientific method and critique." />
                <Item para="Major theoretical strands of research methodology." />
                <Item para="Positivism and its critique." />
                <Item para="Fact value and objectivity.s" />
                <Item para="Non- positivist methodologies." />

                <CommanHeading
                  heading="3. Research Methods And Analysis:"
                />
                <Item para="Qualitative and quantitative methods." />
                <Item para="Techniques of data collection." />
                <Item para="Variables, sampling, hypothesis, reliability and validity." />

                <CommanHeading
                  heading="4. Sociological Thinkers:"
                />
                <Item para="Karl Marx- Historical materialism, mode of production, alienation, class struggle." />
                <Item para="Emile Durkheim- Division of labour, social fact, suicide, religion and society." />
                <Item para="Max Weber- Social action, ideal types, authority, bureaucracy, protestant ethic and the spirit of capitalism.." />
                <Item para="Talcolt Parsons- Social system, pattern variables." />
                <Item para="Robert K. Merton- Latent and manifest functions, conformity and deviance, reference groups." />
                <Item para="Mead - Self and identity." />

                <CommanHeading
                  heading="5. Stratification And Mobility:"
                />
                <Item para="Concepts- equality, inequality, hierarchy, exclusion, poverty and deprivation." />
                <Item para="Theories of social stratification- Structural functionalist theory, Marxist theory, Weberian theory." />
                <Item para="Dimensions – Social stratification of class, status groups, gender, ethnicity and race." />
                <Item para="Social mobility- open and closed systems, types of mobility, sources and causes of mobility." />

                <CommanHeading
                  heading="6. Works And Economic Life:"
                />
                <Item para="Social organization of work in different types of society- slave society, feudal society, industrial /capitalist society" />
                <Item para="Formal and informal organization of work." />
                <Item para="Labour and society." />

                <CommanHeading
                  heading="7. Politics And Society:"
                />
                <Item para="Sociological theories of power." />
                <Item para="Power elite, bureaucracy, pressure groups, and political parties." />
                <Item para="Nation, state, citizenship, democracy, civil society, ideology." />
                <Item para="Protest, agitation, social movements, collective action, revolution." />

                <CommanHeading
                  heading="8. Religion And Society:"
                />
                <Item para="Sociological theories of religion." />
                <Item para="Types of religious practices: animism, monism, pluralism, sects, cults." />
                <Item para="Religion in modern society: religion and science, secularization, religious revivalism," />

                <CommanHeading
                  heading="9. ystems Of Kinship:"
                />
                <Item para="Family, household, marriage." />
                <Item para="Types and forms of family." />
                <Item para="Lineage and descent." />
                <Item para="Patriarchy and sexual division oflabour." />
                <Item para="Contemporary trends." />

                <CommanHeading
                  heading="10. Social Change In Modern Society:"
                />
                <Item para="Sociological theories of social change.." />
                <Item para="Development and dependency." />
                <Item para="Agents of social change." />
                <Item para="Education and social change." />
                <Item para="Science, technology and social change." />

                <CommanHeading
                  heading="PAPPER-2"
                />
                <CommanHeading
                  heading="INDIAN SOCIETY : STRUCTURE AND CHANGE"
                />
                <CommanHeading
                  heading="1. Introducing Indian Society:"
                />
                <CommanHeading
                  heading="I. Perspectives on the study of Indian society:"
                />
                <Item para="Indology (GS. Ghurye)." />
                <Item para="Structural functionalism (M N Srinivas)." />
                <Item para="Marxist sociology (A R Desai)." />


                <CommanHeading
                  heading="II. Impact of colonial rule on Indian society :"
                />
                <Item para="Social background of Indian nationalism." />
                <Item para="Modernization of Indian tradition." />
                <Item para="Protests and movements during the colonial period." />
                <Item para="Social reforms." />

                <CommanHeading
                  heading="2. Social Structure:"
                />
                <CommanHeading
                  heading="I. Perspectives on the study of Indian society:"
                />
                <Item para="The idea of Indian village and village studies." />
                <Item para="Agrarian social structure - evolution of land tenure system, land reforms." />

                <CommanHeading
                  heading="II. Caste System:"
                />
                <Item para="Perspectives on the study of caste systems: GS Ghurye, M N Srinivas, Louis Dumont, Andre Beteille." />
                <Item para="Features of caste system." />
                <Item para="Untouchability - forms and perspectives." />

                <CommanHeading
                  heading="III. Tribal communities in India"
                />
                <Item para="Definitional problems." />
                <Item para="Geographical spread." />
                <Item para="Colonial policies and tribes." />
                <Item para="Issues of integration and autonomy." />

                <CommanHeading
                  heading="IV. Social Classes in India:"
                />
                <Item para="Agrarian class structure." />
                <Item para="Industrial class structure." />
                <Item para="Middle classes in India." />

                <CommanHeading
                  heading="V. Systems of Kinship in India:"
                />
                <Item para="Lineage and descent in India." />
                <Item para="Types of kinship systems." />
                <Item para="Family and marriage in India." />
                <Item para="Household dimensions of the family." />
                <Item para="Patriarchy, entitlements and sexual division of labour" />

                <CommanHeading
                  heading="VI. Religion and Society:"
                />
                <Item para="Religious communities in India." />
                <Item para="Problems of religious minorities." />
                <Item para="Patriarchy, entitlements and sexual division of labour" />

                <CommanHeading
                  heading="3. Social Changes In India:"
                />
                <CommanHeading
                  heading="I. Visions of Social Change in India:"
                />
                <Item para="Idea of development planning and mixed economy" />
                <Item para="Constitution, law and social change." />
                <Item para="Education and social change." />

                <CommanHeading
                  heading="II. Rural and Agrarian transformation in India:"
                />
                <Item para="Programmes of rural development, Community Development Programme, cooperatives,poverty alleviation schemes" />
                <Item para="Green revolution and social change." />
                <Item para="Changing modes of production in Indian agriculture." />
                <Item para="Problems of rural labour, bondage, migration." />

                <CommanHeading
                  heading="III. Industrialization and Urbanisation in India:"
                />
                <Item para="Evolution of modern industry in India." />
                <Item para="Growth of urban settlements in India." />
                <Item para="Working class: structure, growth, class mobilization." />
                <Item para="Informal sector, child labour" />
                <Item para="Slums and deprivation in urban areas." />

                <CommanHeading
                  heading="IV. "
                />
                <Item para="Nation, democracy and citizenship." />
                <Item para="Political parties, pressure groups , social and political elite" />
                <Item para="Regionalism and decentralization of power." />
                <Item para="Secularization" />

                <CommanHeading
                  heading="V. Social Movements in Modern India:"
                />
                <Item para="Peasants and farmers movements." />
                <Item para="Women’s movement." />
                <Item para="Backward classes & Dalit movement." />
                <Item para="Environmental movements." />
                <Item para="Ethnicity and Identity movements." />

                <CommanHeading
                  heading="VI. Population Dynamics:"
                />
                <Item para="Population size, growth, composition and distribution" />
                <Item para="Components of population growth: birth, death, migration." />
                <Item para="Population policy and family planning." />
                <Item para="Emerging issues: ageing, sex ratios, child and infant mortality, reproductive health." />

                <CommanHeading
                  heading="VII. Challenges of Social Transformation:"
                />
                <Item para="Crisis of development: displacement, environmental problems and sustainability" />
                <Item para="Poverty, deprivation and inequalities." />
                <Item para="Violence against women." />
                <Item para="Caste conflicts." />
                <Item para="Ethnic conflicts, communalism, religious revivalism." />
                <Item para="Illiteracy and disparities in education." />




              </div>

            </div>
            {/* <div className={Styles.courcesPage__rowflex__sidebar}>
              <CourcePrice />
              <PaymentDetails />
              <AskQuestion />
              <ApplyNow />
            </div> */}
          </div>
          <div className={Styles.courcesPage__rowflex__couresDetails__crousalArea}>
            <h3>Related Courses</h3>
          </div>
          <CourseCrousel />
        </Container>
      </div>
    </>
  );
};

export default SociologySyllabus;