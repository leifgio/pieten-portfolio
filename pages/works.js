import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
		id="personal-infographics"
		title="Personal Infographics"
		thumbnail={thumbInkdrop}>
            Showcasing attributes, skills and intelligence. This also includes on how to nurture the self.
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="gifted-infographics"
            title="Celebrity Infographics"
            thumbnail={thumbWalknote}
          >
		Presents the achievements of a famous person with disability.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
		id="perspective"
		thumbnail={thumbMenkiki}
		title="Perspective Essay">
            Components of Special and Inclusive Education.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="reflection"
            title="Important Terminologies"
            thumbnail={thumbFourPainters}
          >
            Common Concpets on Special and Inclusive Education
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
		id="report"
		thumbnail={thumbStyly}
		title="Group Report">
            Encouraging Teachers to Practice Inclusive Education in other Marginalized Groups
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="video-role-play"
            thumbnail={thumbModeTokyo}
            title="Video Role Play"
          >
            Physical Disabilities and other Health Impairment
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
		id="video-reflection"
		thumbnail={thumbStyly}
		title="Video Reflection">
            Learning disabilities
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
		id="mindmap"
		thumbnail={thumbStyly}
		title="Mindmap">
            Common Concepts on Special and Inclusive Education
          </WorkGridItem>
        </Section>

	        <Section delay={0.3}>
          <WorkGridItem
		id="slogan"
		thumbnail={thumbStyly}
		title="Slogan">
            Making Schools Inclusive - Creating Inclusive Cultures Producing Inclusive Policies
          </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
