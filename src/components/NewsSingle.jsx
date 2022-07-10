import React from 'react'
import {Card, Button} from 'antd'

function NewsSingle({Title,URL}) {
  return (
    <Card hoverable cover title={Title} size='small'>
        <p className='text-xl'>{Title}....</p>
        <a href={URL}>
            <Button type='primary'>Read More</Button>
        </a>
    </Card>
  )
}

export default NewsSingle