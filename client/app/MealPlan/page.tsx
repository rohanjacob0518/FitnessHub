"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import React from 'react'
import DefaultLayout from '../userdash/layout'
import { useEffect, useState } from "react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,  Pagination, Spinner} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import axios from 'axios'

function MealPlan() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(true);
    const[data,getData] = useState([])
    const meals: any[] = []
    const mealsLabel: any[] = []
    const[plan,getMeal] = useState([])
    const[label,getLabel] = useState([])
    // const[meals,getMeals] = useState([])
    useEffect(()=>{
        const fetchAllData = async ()=>{
            try{
              const res1 = await axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=beef&app_id=9bdbc487&app_key=d99971d4bd667fb3106245fa977664dd&dishType=Main%20course&calories=1590")
              // const res2 = await axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=main&app_id=9bdbc487&app_key=d99971d4bd667fb3106245fa977664dd&health=vegan")
              const res2 = await axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=9bdbc487&app_key=d99971d4bd667fb3106245fa977664dd&dishType=Main%20course&calories=2071")
                // https://api.edamam.com/api/recipes/v2?type=public&q=fish&beta=true&app_id=9bdbc487&app_key=d99971d4bd667fb3106245fa977664dd&mealType=Dinner&calories=1700
                // const res = await axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=main&app_id=9bdbc487&app_key=d99971d4bd667fb3106245fa977664dd")
                // getData(re/s.data)
                getData(res1.data)
                console.log(res1)
                console.log("res3 is", res2)
                let i =0;
                let j =0;
                // let meals:[]
                
                for(i = 0; i<=21;i++){
                    // meals[i] = res.data.hits[i].recipe.image
                    mealsLabel[i] = {lable:res1.data.hits[j].recipe.label,image:res1.data.hits[j].recipe.images.SMALL.url,calories:res1.data.hits[j].recipe.cuisineType
                      ,dietLabel:res1.data.hits[j].recipe.dietLabels
                    }
                    i=i+1
                    mealsLabel[i] = {lable:res2.data.hits[j].recipe.label,image:res2.data.hits[j].recipe.images.SMALL.url,calories:res2.data.hits[j].recipe.cuisineType
                      ,dietLabel:res2.data.hits[j].recipe.dietLabels
                    }
                    
                    j++;
                    // mealsLabel[i] = {lable:res3.data.hits[i].recipe.label,image:res3.data.hits[i].recipe.images.SMALL.url,calories:res3.data.hits[i].recipe.cuisineType
                    //   ,dietLabel:res3.data.hits[i].recipe.dietLabels
                    // }
                    
                    // console.log(`data[${i}].recipe.label :`, res.data.hits[i].recipe.image)
                }
                // getMeal(meals)
                getLabel(mealsLabel)
                console.log("Meals image :",mealsLabel)
            }catch(e){
                console.log(e);
            }
        }
        fetchAllData()  
    },[])
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 3;
  
    const pages = Math.ceil(label.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return label.slice(start, end);
    }, [page, label]);
    console.log("Items:",items)
    console.log("labels is ",label)
  return (
    <>
    {/* <DefaultLayout> */}

        <Breadcrumb pageName='Meal Plan'/>
    <div>
    <Table 
    aria-label="Example table with client side pagination"
    topContent={
      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={7}
          onChange={(page) => setPage(page)}
        />
      </div>
    }
    classNames={{
      wrapper: "min-h-[222px]",
    }}>
    <TableHeader>
        <TableColumn>Label</TableColumn>
        <TableColumn>Image</TableColumn>
        <TableColumn>Cuisine</TableColumn>
        <TableColumn>Diet Label</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item?.calories}>
           <TableCell>{item.lable}</TableCell>
              <TableCell>
                <img src={item.image} alt="invalid" />
                </TableCell>
                <TableCell>{item.calories}</TableCell>
                <TableCell>{item.dietLabel}</TableCell>
          </TableRow>
        )}
      </TableBody>

    </Table> <br /><br />
    </div>
    {/* </DefaultLayout> */}
    </>
  )
}

export default MealPlan