import React from 'react'

function UserProfile() {
  const info = ['Gunnar', 'Mike@solan.com', 'Member', '100KR']

  return (
    <div>
      <ul>
        {info.map((i, index) => (
          <li key={index}>
            <a href={index}>{i}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserProfile
