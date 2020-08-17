import React from 'react';
import { render,  cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ArticleItem from '../../components/Articles/ArticleItem';

afterEach(cleanup);

describe('component ArticleItem', () => {
   test('component exist', () => {
       const mockItem = [];
       const articleItem = render(<ArticleItem items={mockItem}/>);
       expect(articleItem).not.toBeNull();
   });

   test('component return article', async () => {
       const mockItem = [
           {
               "_id": "5f22ef0ff93239294cf6c6f6",
               "Category": "5f295cd2c10d1e0622a013e7",
               "title": "Titre article 1",
               "img": 'imgArticle1',
               "abstract": "Résumé article 1",
               "content": "a",
               "date": "2020-07-30T16:02:23.278Z",
               "__v": 0
           },
           {
               "_id": "5f22ef11cd08d4295887f6f1",
               "Category": "5f295cd2c10d1e0622a013e7",
               "title": "Titre article 2",
               "img": 'imgArticle2',
               "abstract": "Résumé article 2",
               "content": "a",
               "date": "2020-07-30T16:02:25.923Z",
               "__v": 0
           }
       ];
       const { getAllByTestId, debug } = render(<ArticleItem items={mockItem}/>);

       const allTitle = getAllByTestId('title-article').map(itemTitle => itemTitle.textContent);
       const allImg = getAllByTestId('img-article').map(itemImg => itemImg.alt);
       const allAbstract = getAllByTestId('abstract-article').map(itemAbstract => itemAbstract.textContent);

        expect(allTitle).toEqual(['Titre article 1', 'Titre article 2']);
        expect(allImg).toEqual(['Titre article 1', 'Titre article 2']);
        expect(allAbstract).toEqual(["Résumé article 1", "Résumé article 2"]);
   })
});