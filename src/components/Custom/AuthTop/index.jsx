import { Stack, Top, Avatar, Box, Typography } from "../.."
import logo from '../../../assets/logo/logo.png';

 const AuthTop = ({ title_page, subtitle_page }) => {
    return <Box>
              <Box sx={{ ml: 6, mt: 6 }}>
                <Top hasBubble={true} title={"MyTasks"} subtitle={"Organize suas ideias..."}/>
              </Box>
              <Stack alignItems={"center"}>
                <Avatar 
                  sx={{ width: '70%', height: 'auto', mt: 4 }} 
                  src={logo} 
                  alt={'Logo'} />
              </Stack>
              <Stack sx={{ mt: 4, mb: 4 }}>
                <Typography variant={'p'} sx={{ 
                  textAlign: 'center',
                  fontSize: '1.6em !important'

                }}>
                    {title_page}
                  </Typography>
                <Typography variant={'p'} sx={{ 
                  textAlign: 'center',
                  fontSize: '1.1em !important'
                }}>
                  {subtitle_page}
                </Typography>
              </Stack>
          </Box>
 }

 export default AuthTop;