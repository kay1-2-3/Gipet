import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import { Toaster } from '@redwoodjs/web/toast'
import HomeButton from 'src/components/HomeButton/HomeButton'

type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const theme = useTheme()
  return (
    <>
      <Toaster />
      <Stack
        sx={{ minHeight: '100%' }}
        justifyContent={'flex-start'}
        spacing={5}
      >
        <header>
          <Stack spacing={1} direction="row" alignItems={'center'}>
            <div>
              <HomeButton />
            </div>
          </Stack>
        </header>
        <main style={{ flexGrow: 1 }}>
          <Container maxWidth={'xs'}>
            {children}
          </Container>
        </main>
      </Stack>
    </>
  )
}

export default HomeLayout
