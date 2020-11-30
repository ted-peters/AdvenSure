// import { createMedia } from '@artsy/fresnel'
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Segment,
//   Sidebar,
//   Visibility,
// } from 'semantic-ui-react'

// const { MediaContextProvider, Media } = createMedia({
//   breakpoints: {
//     mobile: 0,
//     tablet: 768,
//     computer: 1024,
//   },
// })

// /* Heads up!
//  * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
//  * components for such things.
//  */
// const HomepageHeading = ({ mobile }) => (
//   <Container text>
//     <Header
//       as='h1'
//       content='AdvenSure'
//       inverted
//       style={{
//         fontSize: mobile ? '2em' : '4em',
//         fontWeight: 'normal',
//         marginBottom: 0,
//         marginTop: mobile ? '1.5em' : '3em',
//       }}
//     />
//     <Header
//       as='h2'
//       content='Its time to plan your next getaway.'
//       inverted
//       style={{
//         fontSize: mobile ? '1.5em' : '1.7em',
//         fontWeight: 'normal',
//         marginTop: mobile ? '0.5em' : '1.5em',
//       }}
//     />
//     <Button primary size='huge'>
//       Sign Up Here
//       <Icon name='right arrow' />
//     </Button>
//   </Container>
// )

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool,
// }

// /* Heads up!
//  * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
//  * It can be more complicated, but you can create really flexible markup.
//  */
// class DesktopContainer extends Component {
//   state = {}

//   hideFixedMenu = () => this.setState({ fixed: true })
//   showFixedMenu = () => this.setState({ fixed: false })

//   render() {
//     const { children } = this.props
//     const { fixed } = this.state

//     return (
//       <Media greaterThan='mobile'>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign='center'
//             style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? 'top' : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size='small'
//             >
//               <Container>
//                 <Menu.Item as='a' active>
//                   Home
//                 </Menu.Item>
//                 <Menu.Item as='a'>Weather</Menu.Item>
//                 <Menu.Item as='a'>Planner</Menu.Item>
//                 <Menu.Item position='right'>
//                   <Button as='a' inverted={!fixed}>
//                     Log Out
//                   </Button>
//                   <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
//                     Settings
//                   </Button>
//                 </Menu.Item>
//               </Container>
//             </Menu>
//             <HomepageHeading />
//           </Segment>
//         </Visibility>

//         {children}
//       </Media>
//     )
//   }
// }

// DesktopContainer.propTypes = {
//   children: PropTypes.node,
// }

// class MobileContainer extends Component {
//   state = {}

//   handleSidebarHide = () => this.setState({ sidebarOpened: false })

//   handleToggle = () => this.setState({ sidebarOpened: true })

//   render() {
//     const { children } = this.props
//     const { sidebarOpened } = this.state

//     return (
//       <Media as={Sidebar.Pushable} at='mobile'>
//         <Sidebar.Pushable>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             inverted
//             onHide={this.handleSidebarHide}
//             vertical
//             visible={sidebarOpened}
//           >
//             <Menu.Item as='a' active>
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>Weather</Menu.Item>
//             <Menu.Item as='a'>Planner</Menu.Item>
//             <Menu.Item as='a'>Log Out</Menu.Item>
//             <Menu.Item as='a'>Settings</Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher dimmed={sidebarOpened}>
//             <Segment
//               inverted
//               textAlign='center'
//               style={{ minHeight: 350, padding: '1em 0em' }}
//               vertical
//             >
//               <Container>
//                 <Menu inverted pointing secondary size='large'>
//                   <Menu.Item onClick={this.handleToggle}>
//                     <Icon name='sidebar' />
//                   </Menu.Item>
//                   <Menu.Item position='right'>
//                     <Button as='a' inverted>
//                       Log Out
//                     </Button>
//                     <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
//                       Settings
//                     </Button>
//                   </Menu.Item>
//                 </Menu>
//               </Container>
//               <HomepageHeading mobile />
//             </Segment>

//             {children}
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </Media>
//     )
//   }
// }

// MobileContainer.propTypes = {
//   children: PropTypes.node,
// }

// const ResponsiveContainer = ({ children }) => (
//   /* Heads up!
//    * For large applications it may not be best option to put all page into these containers at
//    * they will be rendered twice for SSR.
//    */
//   <MediaContextProvider>
//     <DesktopContainer>{children}</DesktopContainer>
//     <MobileContainer>{children}</MobileContainer>
//   </MediaContextProvider>
// )

// ResponsiveContainer.propTypes = {
//   children: PropTypes.node,
// }

// const UserPage = () => (
//   <ResponsiveContainer>
//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Grid container stackable verticalAlign='middle'>
//         <Grid.Row>
//           <Grid.Column width={8}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//             When you leave, we leave with you.
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               Heres some places for you take us!
//             </p>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               (API to show travel destinations)
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               All those results could be listed below
//             </p>
//           </Grid.Column>
//           <Grid.Column floated='right' width={6}>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro recusandae voluptatem at sed maxime perferendis eum dolor enim et accusamus aliquam, tempore nostrum sint voluptas veritatis iusto ex ipsum iure.</p>
//           </Grid.Column>
//         </Grid.Row>
//         <Grid.Row>
//           <Grid.Column textAlign='center'>
//             <Button size='huge'>Saved travel Destinations</Button>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>

//     <Segment style={{ padding: '0em' }} vertical>
//       <Grid celled='internally' columns='equal' stackable>
//         <Grid.Row textAlign='center'>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               "AdvenSure is the greatest travel buddy ever"
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>- Every person that travels with us</p>
//           </Grid.Column>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               "I didnt forget my baby this time!"
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               <Image avatar src='https://media.npr.org/assets/img/2019/04/08/flying-baby-2_wide-8462dba57e207d7faaa3d6de2c9b7b806ac6c468-s1600-c85.jpg' alt="baby toss" />
//               <b>Nan</b>(nature mom)
//             </p>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>

//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Container text>
//         <Header as='h3' style={{ fontSize: '2em' }}>
//           This is probably a place we can put a map or something
//         </Header>
//         <p style={{ fontSize: '1.33em' }}>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ut quibusdam. Repudiandae ipsam praesentium autem, ducimus ut perspiciatis eum nemo eveniet, sit quo, quod libero id molestiae? Praesentium, natus nam.
//         </p>
//         <Button as='a' size='large'>
//          Not sure just placeholding
//         </Button>

//         <Divider
//           as='h4'
//           className='header'
//           horizontal
//           style={{ margin: '3em 0em', textTransform: 'uppercase' }}
//         >
//           <a href='#'>Case Studies</a>
//         </Divider>

//         <Header as='h3' style={{ fontSize: '2em' }}>
//           AdvenSure Hotel/Flight tracker?
//         </Header>
//         <p style={{ fontSize: '1.33em' }}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum, reiciendis voluptate harum dolores nemo voluptas voluptates, expedita a facere excepturi incidunt, nobis facilis ad alias repellat laboriosam recusandae sed!
//         </p>
//         <Button as='a' size='large'>
//           Do you like it?
//         </Button>
//       </Container>
//     </Segment>

//     <Segment inverted vertical style={{ padding: '5em 0em' }}>
//       <Container>
//         <Grid divided inverted stackable>
//           <Grid.Row>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='About' />
//               <List link inverted>
//                 <List.Item as='a'>The Team</List.Item>
//                 <List.Item as='a'>Memes</List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={3}>
//               <Header inverted as='h4' content='Services' />
//               <List link inverted>
//                 <List.Item as='a'>Contact Us</List.Item>
//               </List>
//             </Grid.Column>
//             <Grid.Column width={3}>
//               <Header as='h4' inverted>
//                 We Support Black Lives Matter
//               </Header>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Container>
//     </Segment>
//   </ResponsiveContainer>
// )

// export default UserPage
