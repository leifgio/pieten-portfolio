import {
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPersonal from '../public/images/works/personal.png'
import thumbCelebrity from '../public/images/works/gift.png'
import thumbPerspective from '../public/images/works/perspective.png'
import thumbTerminologies from '../public/images/works/terminologies.png'
import thumbGroup from '../public/images/works/group.png'
import thumbMindmap from '../public/images/works/mindmap.png'
import thumbReflection from '../public/images/works/reflection.png'
import thumbRoleplay from '../public/images/works/roleplay.png'
import thumbSlogan from '../public/images/works/slogan.png'
import thumbItempool from '../public/images/works/itempool.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-time student based in Cavite!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Leif Gio Villanueva
          </Heading>
          <p>Future Educator ( Programmer / Student )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/leif.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
		Leif is a dedicated student raised in Imus with a passion for teaching
		and programming. He has a knack for all things leading a group, planning
		and organizing all the procedure that reflects the desired attitude for
		educators. Currently he is studying for a college degree in education.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Solo Works
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
	        <Section>
          <GridItem
		href="https://drive.google.com/file/d/1nzyqVLz8MeFYISQxDK6y-z3DwcOR6X1e/view?usp=sharing"
		title="Personal Infographics"
		thumbnail={thumbPersonal}>
            Showcasing attributes, skills and intelligence. This also includes on how to nurture the self.
          </GridItem>
        </Section>
        <Section>
          <GridItem
            href="https://drive.google.com/file/d/1y7MNJbh_in9-R59UyUyLLYkAu3uNpdUM/view?usp=sharing"
            title="Celebrity Infographics"
            thumbnail={thumbCelebrity}>
		Presents the achievements of a famous person with disability.
          </GridItem>
        </Section>

        <Section delay={0.1}>
          <GridItem
		href="https://drive.google.com/file/d/10rnBVI72pvIuvDHCM1RDoeRGmHnxxW5M/view?usp=sharing"
		thumbnail={thumbPerspective}
		title="Perspective Essay">
            Components of Special and Inclusive Education.
          </GridItem>
        </Section>

        <Section delay={0.1}>
          <GridItem
            href="https://docs.google.com/document/d/1wQGsnQ3DMo_rpCJh2_SVPAJcDpgdcNPfE0ebEd9qd7g/edit?usp=sharing"
            title="Important Terminologies"
            thumbnail={thumbTerminologies}
          >
            Common Concpets on Special and Inclusive Education
          </GridItem>
        </Section>

        <Section delay={0.1}>
          <GridItem
            href="https://docs.google.com/document/d/1_XJHj5FQUtqInicKybr4XI2PrsPU4I9cB5Aah7Amhe8/edit?usp=sharing"
            title="Item Pool"
            thumbnail={thumbItempool}
          >
            Common Concpets on Special and Inclusive Education
          </GridItem>
        </Section>

        </SimpleGrid>

      </Section>

      <Section delay={0.3}>

        <Heading as="h3" variant="section-title">
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <GridItem
		href="https://youtu.be/ZMxkrxV-BpU"
		thumbnail={thumbGroup}
		title="Group Report">
            Encouraging Teachers to Practice Inclusive Education in other Marginalized Groups
          </GridItem>
        </Section>
        <Section delay={0.3}>
          <GridItem
            href="https://youtu.be/KDEY5dGkUrk"
            thumbnail={thumbRoleplay}
            title="Video Role Play"
          >
            Physical Disabilities and other Health Impairment
          </GridItem>
        </Section>
        <Section delay={0.3}>
          <GridItem
		href="https://youtu.be/Uk9KlsVwRFU"
		thumbnail={thumbReflection}
		title="Video Reflection">
            Learning disabilities
          </GridItem>
        </Section>

        <Section delay={0.3}>
          <GridItem
		href="https://drive.google.com/file/d/1TCWHYdyKmTwe4wQNQZgVOS7hW4Oh3tkh/view?usp=sharing"
		thumbnail={thumbMindmap}
		title="Mindmap">
            Common Concepts on Special and Inclusive Education
          </GridItem>
        </Section>

	        <Section delay={0.3}>
          <GridItem
		href="https://drive.google.com/file/d/1TtJk0lCrxBPCKPEBFfzYjBDtrGJ4Ffkv/view?usp=sharing"
		thumbnail={thumbSlogan}
		title="Slogan">
            Making Schools Inclusive - Creating Inclusive Cultures Producing Inclusive Policies
          </GridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
