import { Button } from "@/components/ui/button"
import { Show, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/react"

function App() {
  return (
    <>
      <header>
        <Show when="signed-out">
          <SignInButton>
            <Button variant="default">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="default">Sign Up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
          <SignOutButton>
            <Button variant="default">Sign Out</Button>
          </SignOutButton>
        </Show>
      </header>
    </>
  )
}

export default App