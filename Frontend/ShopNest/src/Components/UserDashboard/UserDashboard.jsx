import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './UserDashboard.css'
import { useClerk } from '@clerk/clerk-react'


import {
  Home,
  X,
  Check,
  RefreshCcw,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function Dashboard() {

  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [value, setValue] = useState('All Products')
  const [userId, setUserId] = useState(null);
  const [activeLink,setActiveLink] = useState(null)
  const [newPrice, setNewPrice] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [checkedLow, setCheckedLow] = useState(false)
  const [checkedHigh, setCheckedHigh] = useState(false)
  const [checkedAsc, setCheckedAsc] = useState(false)
  const [checkedDes, setCheckedDes] = useState(false)
  const [isHistory, setIsHistory] = useState(false)

  const { user } = useClerk();

  const inputRef = useRef();

  useEffect(() => {
    if (user && user.id) {
      setUserId(user.id)
    }
  }, [user])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BASE_URL)
        setProducts(response.data)
        setAllProducts(response.data)
      } catch (error) {
        console.log("Error in fetching data User Dashboard", error)
      }
    }
    fetchProducts()
  }, [])

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value)
    const filteredProducts = allProducts.filter((item) => {
      if (item.name.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    })
    setProducts(filteredProducts)
  }

  const handleAction = async (action, productId) => {
    try {
      if (action === "Edit") {
        console.log("Edit")
      } else if (action === "Delete") {
        alert("Delete the product")
        const response = await axios.delete(`${import.meta.env.VITE_USER_DASHBOARD_CRUD_KEY}/${productId}`)
        console.log("Delete")
        window.location.reload()
      } else {
        const response = await axios.put(`${import.meta.env.VITE_USER_DASHBOARD_CRUD_KEY}/${action}/${productId}`)
        console.log("Response", response.data)
        window.location.reload()
      }
    } catch (err) {
      console.log("userDashboard crud error", err)
    }

  }

  const startEditing = (productId) => {
    setIsEditing((prevIsEditing) => ({
      ...prevIsEditing,
      [productId]: true
    }));
  }

  const handlePriceUpdate = async (id) => {
    const productId = id
    try {
      setIsEditing((prevIsEditing) => ({
        ...prevIsEditing,
        [productId]: false
      }));
      const response = await axios.put(`${import.meta.env.VITE_USER_DASHBOARD_PRICE_UPDATE_KEY}/${newPrice}/${productId}`)
      console.log(response.data)
      window.location.reload()
    } catch (err) {
      console.log("Edit Price  Error", err)
    }
  }

  const handleClick = (value) => {
    setValue(value)

    if (value === "Sold Products") {
      const filteredProducts = allProducts.filter((item) => {
        if (item.status === "Sold") {
          return item;
        }
      })
      setProducts(filteredProducts)
      setCurrentProducts(filteredProducts)
    } else if (value === "Draft Products") {
      const filteredProducts = allProducts.filter((item) => {
        if (item.status === "Draft") {
          return item;
        }
      })
      setProducts(filteredProducts)
      setCurrentProducts(filteredProducts)
    } else if (value === "All Products") {
      setProducts(allProducts)
      setCurrentProducts(allProducts)
    } else if (value === "Offered Products") {
      const filteredProducts = allProducts.filter((item) => {
        if (item.offers.length >= 1 && item.status === "Draft") {
          return item;
        }
      })
      setProducts(filteredProducts)
      setCurrentProducts(filteredProducts)
    }

  }

  const handleReset = () => {
    setProducts(allProducts)
    setSearchTerm('')
    setCheckedAsc(false)
    setCheckedDes(false)
    setCheckedLow(false)
    setCheckedHigh(false)
    // window.location.reload()
  }

  const handleReject = async (offer, productId) => {
    console.log(offer)
    console.log(productId)
    try {
      const response = await axios.delete(`${import.meta.env.VITE_USER_DASHBOARD_REJECT_KEY}/${offer}/${productId}`)
      console.log(response.data)
      window.location.reload()
    } catch (err) {
      console.log("Rejection erroe", err)
    }
  }

  const handleSortChange = (value) => {
    if (value === "low_to_high") {
      const sortedFiltered = [...currentProducts]
      sortedFiltered.sort((a, b) => a.price - b.price)
      setProducts(sortedFiltered)
      setCheckedLow(true)
      setCheckedHigh(false)
    } else if (value === "high_to_low") {
      const sortedFiltered = [...currentProducts]
      sortedFiltered.sort((a, b) => b.price - a.price)
      setProducts(sortedFiltered)
      setCheckedHigh(true)
      setCheckedLow(false)
    } else if (value === "ascending") {
      const sortedFiltered = [...currentProducts]
      sortedFiltered.sort((a, b) => a.name.localeCompare(b.name))
      setProducts(sortedFiltered)
      setCurrentProducts(sortedFiltered)
      setCheckedAsc(true)
      setCheckedDes(false)
    } else {
      const sortedFiltered = [...currentProducts]
      sortedFiltered.sort((a, b) => b.name.localeCompare(a.name))
      setProducts(sortedFiltered)
      setCurrentProducts(sortedFiltered)
      setCheckedDes(true)
      setCheckedAsc(false)
    }
  }

  const showHistory = (linkName) => {
    setProducts(allProducts)
    setIsHistory(true)
    handleLinkClick(linkName)
  }

  const handleDashboard = (linkName) => {
    setIsHistory(false)
    setActiveLink(linkName);
  }

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  }

  return (
    <div className='main_user_dashboard'>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">

        <aside className="fixed left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">

          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">

            <Link
              onClick={() => handleDashboard("Inc")}
              className={`group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base ${activeLink === "Inc" ? 'bg-accent' : ''}`}
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${activeLink === "Home" ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                  onClick={() => {handleLinkClick("Home")}}
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to={`/wishlist/${userId}`}
                  onClick={() => handleLinkClick("Wishlist")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeLink === "Wishlist" ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Wishlist</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Wishlist</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  onClick={() => showHistory("History") }
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeLink === "History" ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">History</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">History</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("Offers")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeLink === "Offers" ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Offers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Offers</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("Analytics")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${activeLink === "Analytics" ? 'bg-accent' : 'text-muted-foreground'}`}
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>

          </nav>

          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  onClick={() => handleLinkClick("Settings")}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${activeLink === "Settings" ? 'bg-accent' : ''}`}
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>

        </aside>

        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

          <header className="top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">

            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">

                <nav className="grid gap-6 text-lg font-medium">

                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Users2 className="h-5 w-5" />
                    Customers
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Settings
                  </Link>

                </nav>

              </SheetContent>
            </Sheet>

            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Products</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                onChange={handleSearchChange}
                value={searchTerm}
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvSmEu01A91R04_-k5S_7koRM5dffVGdHfP-j3-67lA&s"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </header>

          {/* ----------------- NAVBAR ENDED -----------------  */}

          {isHistory ? (

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">


              {/* -------------------------- Working Field -------------------------- */}

              <Tabs defaultValue={value}>

                <div className="flex items-center">

                  <TabsList>
                    <TabsTrigger onClick={() => handleClick("All Products")} value="All Products">All</TabsTrigger>
                    <TabsTrigger onClick={() => handleClick("Purchased Products")} value="Purchased Products">Purchased</TabsTrigger>
                    <TabsTrigger onClick={() => handleClick("Sold Products")} value="Sold Products">Sold</TabsTrigger>
                  </TabsList>

                  <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <ListFilter className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Sort
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuCheckboxItem checked={checkedLow} onClick={() => handleSortChange("low_to_high")}>
                          Low to High
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem checked={checkedHigh} onClick={() => handleSortChange("high_to_low")}>
                          High to Low
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem checked={checkedAsc} onClick={() => handleSortChange("ascending")}>
                          Ascending Order
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem checked={checkedDes} onClick={() => handleSortChange("descending")}>
                          Descending Order
                        </DropdownMenuCheckboxItem>

                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Button onClick={handleReset} size="sm" variant="outline" className="h-8 gap-1">
                      <RefreshCcw className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Reset
                      </span>
                    </Button>

                    <Link to='/selling-page'>
                      <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Add Product
                        </span>
                      </Button>
                    </Link>

                  </div>
                </div>

                <TabsContent value={value}>
                  <Card x-chunk="dashboard-06-chunk-0">

                    <CardHeader>
                      <CardTitle>{value} History Section</CardTitle>
                      <CardDescription>
                        Manage your products history and view their sales performance.
                      </CardDescription>
                    </CardHeader>

                    <CardContent>

                      <Table>

                        <TableHeader>

                          <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                              <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">
                              Price
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Offered
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Sold/Purchased at
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Created at
                            </TableHead>
                            <TableHead>
                              <span className="sr-only">Actions</span>
                            </TableHead>
                          </TableRow>

                        </TableHeader>

                        <TableBody>

                          {/* -------------- From here single products start -------------- */}

                          {products && products.map((product) => {

                            if (product.offers && product.offers.length > 1) {

                              if (product.status && product.status === "Sold") {
                                return product.offers.map((offer, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          autoFocus={true}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {offer}
                                    </TableCell>
                                    <TableCell className="hidden  md:table-cell">
                                      {product.soldDate.split('T')[0]}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                ))
                              } else if ((product.status && product.status === "Purchased")) {
                                return product.offers.map((offer, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {offer}
                                    </TableCell>
                                    <TableCell className="hidden  md:table-cell">
                                      {product.soldDate.split('T')[0]}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    {/* <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell> */}
                                  </TableRow>
                                ))
                              }


                            }  else {

                              if (product.status && product.status === "Sold") {
                                return product.offers.map((offer, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {offer}
                                    </TableCell>
                                    <TableCell className="hidden  md:table-cell">
                                      {product.soldDate.split('T')[0]}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                  </TableRow>
                                ))
                              } else if ((product.status && product.status === "Purchased")) {
                                return (
                                  <TableRow key={product._id}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.offers}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.soldDate.split('T')[0]}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                  </TableRow>
                                )
                              }
                            }

                          })}

                        </TableBody>

                      </Table>

                    </CardContent>
                    <CardFooter>
                      <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>{products.length}</strong>{" "}
                        products
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

              </Tabs>


            </main>


          ) : (

            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">


              {/* -------------------------- Working Field -------------------------- */}

              <Tabs defaultValue={value}>

                <div className="flex items-center">

                  <TabsList>
                    <TabsTrigger onClick={() => handleClick("All Products")} value="All Products">All</TabsTrigger>
                    <TabsTrigger onClick={() => handleClick("Sold Products")} value="Sold Products">Sold</TabsTrigger>
                    <TabsTrigger onClick={() => handleClick("Draft Products")} value="Draft Products">Draft</TabsTrigger>
                    <TabsTrigger onClick={() => handleClick("Offered Products")} value="Offered Products" className="hidden sm:flex">
                      Offered
                    </TabsTrigger>
                  </TabsList>

                  <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <ListFilter className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Sort
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuCheckboxItem checked={checkedLow} onClick={() => handleSortChange("low_to_high")}>
                          Low to High
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem checked={checkedHigh} onClick={() => handleSortChange("high_to_low")}>
                          High to Low
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem checked={checkedAsc} onClick={() => handleSortChange("ascending")}>
                          Ascending Order
                        </DropdownMenuCheckboxItem>

                        <DropdownMenuCheckboxItem checked={checkedDes} onClick={() => handleSortChange("descending")}>
                          Descending Order
                        </DropdownMenuCheckboxItem>

                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Button onClick={handleReset} size="sm" variant="outline" className="h-8 gap-1">
                      <RefreshCcw className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Reset
                      </span>
                    </Button>

                    <Link to='/selling-page'>
                      <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Add Product
                        </span>
                      </Button>
                    </Link>

                  </div>
                </div>

                <TabsContent value={value}>
                  <Card x-chunk="dashboard-06-chunk-0">

                    <CardHeader>
                      <CardTitle>{value}</CardTitle>
                      <CardDescription>
                        Manage your products and view their sales performance.
                      </CardDescription>
                    </CardHeader>

                    <CardContent>

                      <Table>

                        <TableHeader>

                          <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                              <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">
                              Price
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Offers
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Decision
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Created at
                            </TableHead>
                            <TableHead>
                              <span className="sr-only">Actions</span>
                            </TableHead>
                          </TableRow>

                        </TableHeader>

                        <TableBody>

                          {/* -------------- From here single products start -------------- */}

                          {products && products.map((product) => {

                            if (product.offers && product.offers.length > 1) {

                              if (product.status && product.status === "Sold") {
                                return product.offers.map((offer, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          autoFocus={true}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {offer}
                                    </TableCell>
                                    <TableCell className="hidden  md:table-cell">
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                ))
                              } else if ((product.status && product.status === "Draft")) {
                                return product.offers.map((offer, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {offer}
                                    </TableCell>
                                    <TableCell className="hidden  md:table-cell">
                                      <Button size="sm" className="h-8 gap-1">
                                        <Check className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                          Accept
                                        </span>
                                      </Button>
                                      <Button onClick={() => handleReject(offer, product._id)} size="sm" variant="outline" className="h-8 ml-5 gap-1">
                                        <X className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                          Reject
                                        </span>
                                      </Button>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                ))
                              }


                            } else if (product.offers && product.offers.length === 0) {

                              if (product.status && product.status === "Sold") {
                                return product.offers.map((offer, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {offer}
                                    </TableCell>
                                    <TableCell className="hidden  md:table-cell">
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                ))
                              } else if ((product.status && product.status === "Draft")) {

                                return (
                                  <TableRow key={product._id}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      no offers yet
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                )
                              }

                            } else {

                              if (product.status && product.status === "Sold") {
                                return product.offers.map((offer, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {offer}
                                    </TableCell>
                                    <TableCell className="hidden  md:table-cell">
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                ))
                              } else if ((product.status && product.status === "Draft")) {


                                return (
                                  <TableRow key={product._id}>
                                    <TableCell className="hidden sm:table-cell">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product.images[0]}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {product.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">{product.status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {isEditing[product._id] ? (
                                        <input
                                          type='text'
                                          value={newPrice}
                                          ref={inputRef}
                                          onChange={(e) => setNewPrice(e.target.value)}
                                          onBlur={() => handlePriceUpdate(product._id)}
                                        />
                                      ) : (
                                        <span>{product.price}</span>
                                      )}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.offers}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      <Button size="sm" className="h-8 gap-1">
                                        <Check className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                          Accept
                                        </span>
                                      </Button>
                                      <Button onClick={() => handleReject(product.offers[0], product._id)} size="sm" variant="outline" className="h-8 ml-5 gap-1">
                                        <X className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                          Reject
                                        </span>
                                      </Button>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      {product.date.split('T')[0]}
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                          <DropdownMenuItem value='Edit' onClick={() => startEditing(product._id)}>Edit</DropdownMenuItem>
                                          <DropdownMenuItem value='Delete' onClick={() => handleAction("Delete", product._id)}>Delete</DropdownMenuItem>
                                          <DropdownMenuItem value='Sold' onClick={() => handleAction("Sold", product._id)}>Sold</DropdownMenuItem>
                                          <DropdownMenuItem value='Draft' onClick={() => handleAction("Draft", product._id)}>Draft</DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                )

                              }
                            }

                          })}

                        </TableBody>

                      </Table>

                    </CardContent>
                    <CardFooter>
                      <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>{products.length}</strong>{" "}
                        products
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

              </Tabs>


            </main>

          )}


        </div>

      </div>
    </div>
  )
}

export default Dashboard

