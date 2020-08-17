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
   })
});