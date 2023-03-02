interface IProps {
  title: string,
  obj: {
    firstName: string,
    phoneNumber: number
  }
}

export const Card: React.FC<IProps> = ({ title, obj }) => {
  console.log(obj);
  return (
    <div className="card">
      {title}
    </div>
  )
}