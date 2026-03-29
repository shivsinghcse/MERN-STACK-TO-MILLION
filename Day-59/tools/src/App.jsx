import { DangerButton, DarkButton, InfoButton, PrimaryButton, SecondaryButton, SuccessButton, WarningButton } from "./components/shared/Button"

const App = () => {
  return (
    <>
      <div className="p-12 space-x-8 space-y-8">
        <PrimaryButton onClick={()=>alert()} />
        <SecondaryButton />
        <WarningButton />
        <SuccessButton />
        <DangerButton />
        <InfoButton />
        <DarkButton />
      </div>
    </>
  )
}

export default App