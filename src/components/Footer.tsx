const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <hr />
      <div
        style={{
          background: 'none'
        }}
      >
        <p> &copy; {currentYear} All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
