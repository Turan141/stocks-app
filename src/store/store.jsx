import create from "zustand"

const itemsJsonURL =
	"https://api.jsonbin.io/v3/b/632375df5c146d63ca9ce393"

const useStore = create((set) => ({
	itemsJsonURL: itemsJsonURL,

	Items: {},
	Filters: "",
	FilterByName: "",

	filterItems: (filter) => {
		set(() => ({
			Filters: filter,
		}))
	},

	filterByName: (name) => {
		set(() => ({
			FilterByName: name,
		}))
	},

	setTrade: (id) => {
		set((state) => ({
			Items: state.Items.map((elem) =>
				elem.id === id
					? {
							...elem,
							isTrade: "true",
							isStocked: "false",
							isFavorite: "false",
					  }
					: elem
			),
		}))
	},
	setStocked: (id) => {
		set((state) => ({
			Items: state.Items.map((elem) =>
				elem.id === id
					? {
							...elem,
							isTrade: "false",
							isStocked: "true",
							isFavorite: "false",
					  }
					: elem
			),
		}))
	},
	setFavorite: (id) => {
		set((state) => ({
			Items: state.Items.map((elem) =>
				elem.id === id
					? {
							...elem,
							isTrade: "false",
							isStocked: "false",
							isFavorite: "true",
					  }
					: elem
			),
		}))
	},
	fetch: async (link) => {
		const response = await fetch(link)
		const json = await response.json()
		set({ Items: json?.record?.items })
	},
}))

export default useStore
