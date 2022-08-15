import {useState, useEffect} from 'react'
import * as C from './App.styles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import {TableArea} from './components/TableArea'
import { InfoArea } from './components/InfoArea'

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList ( filterListByMonth(list, currentMonth))
  }, [list, currentMonth])
  // essa função pega a lista pura e o mês atual, filtra e jogar numa nova lista e joga para filteredList.

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
      {/* Área de Informações */}
      <InfoArea currentMonth={currentMonth} 
      onMonthChange={handleMonthChange} />

      {/* Área de Inserção */}

      {/* Área de Conteudo */}
      <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  )
}

export default App;