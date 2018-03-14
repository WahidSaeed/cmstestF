import React from 'react';
import '../App.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PostPagination extends React.Component {
  render() {
    return (
      <Pagination>
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            1
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
            </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default PostPagination;