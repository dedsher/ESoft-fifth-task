interface LoaderProps {
    status: string;
    children: React.ReactNode;
  }

const Loader = ({status, children}: LoaderProps) => {
  return (
    <div>
      {status === "loading" && <div>Загрузка...</div>}
      {status === "failed" && <div>Ошибка загрузки</div>}
      {status === "succeeded" && children}
    </div>
  )
}

export default Loader