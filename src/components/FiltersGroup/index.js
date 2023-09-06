import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    onSearchProduct,
    onSearchProductEnter,
    searchInputValue,
    ratingsList,
    categoryOptions,
    onFilterCategory,
    onFilterRating,
    clearFilters,
  } = props

  const onClikClearFilter = () => {
    clearFilters()
  }

  const onSearchEnter = event => {
    if (event.key === 'Enter') {
      onSearchProductEnter()
    }
  }

  const onSearch = event => {
    const searchInput = event.target.value
    onSearchProduct(searchInput)
  }

  const renderCategories = () =>
    categoryOptions.map(category => {
      const {name, categoryId} = category
      const onClickCategory = () => {
        onFilterCategory(categoryId)
      }
      return (
        <li className="category-item" key={categoryId}>
          <button
            onClick={onClickCategory}
            className="category-button"
            type="button"
          >
            <p>{name}</p>
          </button>
        </li>
      )
    })

  const renderRatingList = () =>
    ratingsList.map(rating => {
      const {imageUrl, ratingId} = rating
      const onClickRating = () => {
        onFilterRating(ratingId)
      }
      return (
        <li className="rating-item" key={ratingId}>
          <button
            onClick={onClickRating}
            type="button"
            className="rating-button"
          >
            <img
              className="rating-image"
              src={imageUrl}
              alt={`rating ${ratingId}`}
            />
            <p className="up">& up</p>
          </button>
        </li>
      )
    })

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        value={searchInputValue}
        onChange={onSearch}
        onKeyDown={onSearchEnter}
        type="search"
        className="search-input"
      />
      <BsSearch className="search-icon" />
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ul className="category-container">
        <h1 className="category-heading">Category</h1>
        {renderCategories()}{' '}
      </ul>
      <ul className="ratings-list-container">
        <h1 className="rating-heading">Rating</h1>
        {renderRatingList()}
      </ul>
      <button
        onClick={onClikClearFilter}
        className="clear-filter-button"
        type="button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
