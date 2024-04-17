import React, { useEffect, useState } from 'react'
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
  const [searchTerm, setSearchTerm] = useState('')
  const [value, setValue] = useState('All Products')
  const [userId, setUserId] = useState(null);
  // console.log(userId)

  const { user } = useClerk();

  useEffect(() => {
    if (user && user.id) {
      console.log(user.id)
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

  const handleClick = (value) => {
    setValue(value)

    if (value === "Sold Products") {
      const filteredProducts = allProducts.filter((item) => {
        if (item.status === "Sold") {
          return item;
        }
      })
      setProducts(filteredProducts)
    } else if (value === "Draft Products") {
      const filteredProducts = allProducts.filter((item) => {
        if (item.status === "Draft") {
          return item;
        }
      })
      setProducts(filteredProducts)
    } else if (value === "All Products") {
      setProducts(allProducts)
    } else if (value === "Offered Products") {
      const filteredProducts = allProducts.filter((item) => {
        if (item.offers.length >= 1) {
          return item;
        }
      })
      setProducts(filteredProducts)
    }

  }

  const handleReset = () => {
    setProducts(allProducts)
    setSearchTerm('')
    // window.location.reload()
  }

  const handleAction = async (action, productId) => {
    console.log("New", action)
    console.log("New", productId)
    // try {
    //   const response = await axios.
    // } catch(err) {
    //   console.log("userDashboard crud error", err)
    // }
  }

  return (
    <div className='main_user_dashboard'>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">

        <aside className="fixed left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">

          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">

            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
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
                          Filter
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Sold
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Offered
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
                                  {product.price}
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
                                  <Button size="sm" variant="outline" className="h-8 ml-5 gap-1">
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
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>Delete</DropdownMenuItem>
                                      <DropdownMenuItem value='sold' onClick={() => handleAction("sold", product._id)}>Sold</DropdownMenuItem>
                                      <DropdownMenuItem value='draft' onClick={() => handleAction("draft", product._id)}>Draft</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            ))

                          } else if (product.offers && product.offers.length === 0) {

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
                                  {product.price}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  no offers yet
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  <Button size="sm" className="h-8 gap-1">
                                    <Check className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                      Accept
                                    </span>
                                  </Button>
                                  <Button size="sm" variant="outline" className="h-8 ml-5 gap-1">
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
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>Delete</DropdownMenuItem>
                                      <DropdownMenuItem value='sold' onClick={() => handleAction("sold", product._id)}>Sold</DropdownMenuItem>
                                      <DropdownMenuItem value='draft' onClick={() => handleAction("draft", product._id)}>Draft</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            )

                          } else {

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
                                  {product.price}
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
                                  <Button size="sm" variant="outline" className="h-8 ml-5 gap-1">
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
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>Delete</DropdownMenuItem>
                                      <DropdownMenuItem value='sold' onClick={() => handleAction("sold", product._id)}>Sold</DropdownMenuItem>
                                      <DropdownMenuItem value='draft' onClick={() => handleAction("draft", product._id)}>Draft</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            )

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
        </div>

      </div>
    </div>
  )
}

export default Dashboard

