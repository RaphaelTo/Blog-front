import React from 'react';
import { render,  waitForElement, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

import Article from '../../components/Articles/Article';

jest.mock('axios');

afterEach(cleanup);

describe('component Article', () => {
    test('component exist', () => {
        const mockArticleItem = {
            data: {
                type: 'success',
                result: [
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
                ]
            }
        };
        axiosMock.get.mockResolvedValue(mockArticleItem);
        const article = render(<Article/>);

        expect(article).not.toBeNull();
    });

    test('component return "O article trouvé"', () => {
        const mockArticleItem = {
            data: {
                type: 'success',
                result: [
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
                ]
            }
        };
        axiosMock.get.mockResolvedValue(mockArticleItem);
        const { getByTestId } = render(<Article/>);

        const getZeroArticle = getByTestId('zero-article');

        expect(getZeroArticle).toHaveTextContent('0 article trouvé');
    });

    test('component return article with img name abstract', async () => {
        const mockArticleItem = {
            data: {
                type: 'success',
                result: [
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
                ]
            }
        };
        axiosMock.get.mockResolvedValue(mockArticleItem);
        const { getByTestId, getAllByTestId, debug } = render(<Article />);
        const initializeComponent = getByTestId('zero-article');
        expect(initializeComponent).toHaveTextContent('0 article trouvé');

        await waitForElement(() => getAllByTestId('article-component'));
        const allTitle = getAllByTestId('title-article').map(itemTitle => itemTitle.textContent);
        const allImg = getAllByTestId('img-article').map(itemImg => itemImg.alt);
        const allAbstract = getAllByTestId('abstract-article').map(itemAbstract => itemAbstract.textContent);

        expect(allTitle).toEqual(['Titre article 1', 'Titre article 2']);
        expect(allImg).toEqual(['Titre article 1', 'Titre article 2']);
        expect(allAbstract).toEqual(["Résumé article 1", "Résumé article 2"]);
    })
});